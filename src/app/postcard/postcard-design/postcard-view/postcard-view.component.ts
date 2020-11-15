import { Component, OnInit } from "@angular/core";
import { PostcardHttpService } from "@core/services/http/postcard-http.service";

@Component({
  selector: "postcard-view",
  templateUrl: "./postcard-view.component.html",
  styleUrls: ["./postcard-view.component.scss"]
})
export class PostcardViewComponent implements OnInit {
  public postCards: any[];
  public activeIndex: number = 0;
  public rotationalState: number = 0;
  public imageSize: number = 600;
  public edit: boolean;
  public zoomType: string;
  public reset:  boolean;
  public undo: boolean;
  private cardHistroy: { imageSize: number; rotationalState: number } = {
    imageSize: 500,
    rotationalState: 0
  };

  constructor(private postcardHttp: PostcardHttpService) {}

  ngOnInit() {
    this.postcardHttp
      .getData("assets/model/images-details.json")
      .subscribe(data => {
        this.postCards = data;
      });
  }

  public rotateImage(): void {
    this.cardHistroy.rotationalState = this.rotationalState;
    this.rotationalState = (this.rotationalState + 1) % 5;
  }

  public zoomInImage(): void {
    if (this.imageSize <= 1500) {
      this.imageSize += 100;
      this.zoomType = '';
      setTimeout(() =>  this.zoomType = 'in');
    }
  }

  public zoomOutImage(): void {
    if (this.imageSize >= 200) {
      this.cardHistroy.imageSize = this.imageSize;
      this.imageSize -= 100;
      this.zoomType = '';
      setTimeout(() =>  this.zoomType = 'out');
    }
  }

  public resetCard(): void {
    this.cardHistroy.rotationalState = this.rotationalState;
    this.imageSize = 600;
    this.rotationalState = 0;
    this.reset = false;
    setTimeout(() => this.reset = true);
  }

  public undoChange(): void {
    this.imageSize = this.cardHistroy.imageSize;
    this.rotationalState = this.cardHistroy.rotationalState;
    this.undo = false;
    setTimeout(() => this.undo = true);
  }

  public addText(): void {
    this.edit = false;
    setTimeout(() => {
      this.edit = true;
    });
  }
}
