import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'gelato-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input()
  public label: string;

  @Input()
  public disable: boolean;

  @Output()
  public action = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public buttonClick(): void {
    this.action.emit('');
  }

}
