import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gelato-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  @Input()
  public text: string = '';

  @Output()
  public textChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onTextChange(value): void {
    this.textChange.emit(value);
  }

}
