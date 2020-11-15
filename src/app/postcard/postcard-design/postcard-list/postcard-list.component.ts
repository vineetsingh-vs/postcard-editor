import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'postcard-list',
  templateUrl: './postcard-list.component.html',
  styleUrls: ['./postcard-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostcardListComponent implements OnInit {

  @Input()
  public active: boolean;

  @Input()
  public image: string;

  constructor() { }

  ngOnInit() {
  }

}
