import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostcardViewComponent } from "@postcard/postcard-design/postcard-view/postcard-view.component";

const routes: Routes = [{ path: '', component: PostcardViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostcardDeisgnRoutingModule {}
