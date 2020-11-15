import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef
} from "@angular/core";

import * as RotateAnimation from "@shared/animation-utils/clockwise-90deg.animation";

@Component({
  selector: "postcard-preview",
  templateUrl: "./postcard-preview.component.html",
  styleUrls: ["./postcard-preview.component.scss"],
  animations: RotateAnimation.rotationalTrigger
})
export class PostcardPreviewComponent implements OnInit, OnChanges {
  @Input()
  public canvasHeight: number ;

  @Input()
  public canvasWidth: number ;

  @Input()
  public imageUrl: string;

  @Input()
  public rotationalState: number = 0;

  @Input()
  public imageSize: number = 600;

  @Input()
  public edit: boolean;

  @Input()
  public zoomType: string;

  @Input()
  public reset: boolean;

  @Input()
  public undo: boolean;

  public drawItems: any = [];
  public state: string;
  public value: string;
  public imgWidth: number;
  public image: any;
  public translatePos = { x: this.canvasWidth / 2, y: this.canvasHeight / 2 };
  public scale: number = 1.0;
  public scaleMultiplier: number = 0.9;
 

  @ViewChild("canvas", { static: false }) canvas: ElementRef;
  @ViewChild("imageContainer", { static: false }) imageContainer: ElementRef;
  @ViewChild("movable", { static: false }) movable: ElementRef;

  private context: CanvasRenderingContext2D;
  private layer1CanvasElement: any;
  private cardState: any = {};

  constructor() {}

  ngOnInit(): void {
    this.state = RotateAnimation.states.get(this.rotationalState);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.imageUrl && !!changes.imageUrl.currentValue) {
      this.rotationalState = 0;
      this.imageLoad();
    }
    if (!!changes.zoomType && !!changes.zoomType.currentValue) {
      if (["in"].includes(changes.zoomType.currentValue)) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    }
    if (!!changes.reset && !!changes.reset.currentValue) {
      this.scale = 1.0;
      this.showImage();
    }
    if (!!changes.undo && !!changes.undo.currentValue) {
      this.scale = this.cardState.scale;
      this.showImage();
    }
    if (!!changes.edit && !!changes.edit.currentValue) {
      this.drawItem();
    }
    if (!!changes.rotationalState && !!changes.rotationalState.currentValue) {
      this.rState();
    }
    this.state = RotateAnimation.states.get(this.rotationalState);
  }

  public textChanges(value: string): void {
    this.value = value;
  }
  public imageLoad(): void {
    this.image = new Image();
    this.image.src = `assets/images/${this.imageUrl}`;
    this.image.onload = () => {
      this.image.width = this.canvasWidth;
      this.image.height = this.canvasHeight;
      this.layer1CanvasElement = this.canvas.nativeElement;
      this.layer1CanvasElement.width = this.canvasWidth;
      this.layer1CanvasElement.height = this.canvasHeight;
      this.layer1CanvasElement.addEventListener("mousedown", (e) => {
       this.edit = false;
      });
      this.drawItem();
      this.showImage();
    };
  }

  public showImage(): void {
    this.layer1CanvasElement = this.canvas.nativeElement;
    this.context = this.layer1CanvasElement.getContext("2d");
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.context.save();
    this.context.translate(this.translatePos.x, this.translatePos.y);
    this.context.scale(this.scale, this.scale);
    this.context.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height
    );
    this.context.restore();
  }

  public zoomIn(): void {
    this.cardState.scale = this.scale;
    this.scale /= this.scaleMultiplier;
    this.showImage();
  }
  public zoomOut(): void {
    this.cardState.scale = this.scale;
    this.scale *= this.scaleMultiplier;
    this.showImage();
  }

  public dragEvent(event: any): void {

    const dragDimension = event.source.element.nativeElement.getClientRects()[0];
    const containerDimension = this.imageContainer.nativeElement.getClientRects()[0];
    if (
      dragDimension.left < containerDimension.left ||
      dragDimension.right > containerDimension.right ||
      dragDimension.top < containerDimension.top ||
      dragDimension.bottom > containerDimension.bottom
    ) {
      this.edit = false;
      this.value = '';
      this.drawItems = [];
    }
  }

  public drawItem(): void {
    const a = 150 * this.scale;
    const b = 100 * this.scale;
    this.drawItems = [{
      name: "",
      x0: a,
      y0: b
    }];
  }

  public rState(): void {
    debugger;
  }
}
