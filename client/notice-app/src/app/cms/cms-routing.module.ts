import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsImagesComponent } from '../cms-images/cms-images.component';

const routes: Routes = [
  {path: 'cms/images', component: CmsImagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CmsRoutingModule { 

}
