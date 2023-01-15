import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CmsImagesComponent } from './cms-images/cms-images.component';
import { CmsComponent } from './cms/cms.component';

const routes: Routes = [
    {path: 'cms', component: CmsComponent},
    {path: 'cms/images', component: CmsImagesComponent, outlet: "cms-router"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
