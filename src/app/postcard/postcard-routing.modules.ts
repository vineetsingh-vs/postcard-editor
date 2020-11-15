import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'postcard',
        loadChildren:  () => import('@postcard/postcard-design/postcard-design.module').then(mod => mod.PostcardDesignModule)
      },
      {
        path: '',
        redirectTo: 'postcard',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class PostCardRoutingModule { }
