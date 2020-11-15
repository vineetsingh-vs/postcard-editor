import { NgModule } from "@angular/core";
import { PostcardDeisgnRoutingModule } from "@postcard/postcard-design/postcard-design-routing.module";
import { SharedModule } from "@shared/shared.module";
import { CoreModule } from "@core/core.module";

import { PostcardPreviewComponent } from "@postcard/postcard-design/postcard-preview/postcard-preview.component";
import { PostcardListComponent } from "@postcard/postcard-design/postcard-list/postcard-list.component";
import { PostcardViewComponent } from "@postcard/postcard-design/postcard-view/postcard-view.component";

const components = [
  PostcardPreviewComponent,
  PostcardListComponent,
  PostcardViewComponent
];

const modules = [
  PostcardDeisgnRoutingModule, 
  SharedModule,
  CoreModule
];

@NgModule({
  declarations: [...components],
  imports: [...modules]
})
export class PostcardDesignModule {}
