import { Directive, Output, EventEmitter, ElementRef, NgZone, OnInit } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})


export class ClickOutsideDirective implements OnInit {

  @Output('clickOutside')
  public clickEvent = new EventEmitter();

  constructor(private el: ElementRef, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      document.addEventListener('click', (event) => this.clickOutside(event), true);
    });
  }

  private clickOutside(event: any): void {
    if(!this.el.nativeElement.contains(event.target)) {
      this.ngZone.run(() => {
        this.clickEvent.emit(true);
      })
    }

  }

}
