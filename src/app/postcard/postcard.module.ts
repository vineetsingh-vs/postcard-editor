import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PostCardRoutingModule} from '@postcard/postcard-routing.modules';

import {PostcardComponent} from '@postcard/postcard.component';

const modules = [
  PostCardRoutingModule,
  BrowserModule,
  BrowserAnimationsModule
]


@NgModule({
  declarations: [PostcardComponent],
  imports: [
    ...modules
  ],
  bootstrap: [PostcardComponent]
})
export class PostcardModule { }
