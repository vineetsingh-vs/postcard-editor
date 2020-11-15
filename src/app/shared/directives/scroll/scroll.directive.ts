import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[scroll]",
  exportAs: "scroll"
})
export class ScrollDirective {
  constructor(private elementRef: ElementRef) {}

  @Input() scrollUnit: number;

  private get element() {
    return this.elementRef.nativeElement;
  }

  get isOverflow() {
    return this.element.scrollWidth > this.element.clientWidth;
  }

  scroll(direction: number) {
    this.element.scrollLeft += this.scrollUnit * direction;
    this.element.behavior = 'smooth';
  }

  get canScrollStart() {
    return this.element.scrollLeft > 0;
  }

  get canScrollEnd() {
    return (
      this.element.scrollLeft + this.element.clientWidth !=
      this.element.scrollWidth
    );
  }
}
