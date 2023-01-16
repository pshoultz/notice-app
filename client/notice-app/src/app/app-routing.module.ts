import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CmsComponent } from './cms/cms.component';
import { CmsAnalysisComponent } from './cms-analysis/cms-analysis.component';
import { CmsImagesComponent } from './cms-images/cms-images.component';
import { CmsVideosComponent } from './cms-videos/cms-videos.component';
import { CmsBroadcastComponent } from './cms-broadcast/cms-broadcast.component';

const routes: Routes = [
    {
      path: 'cms', 
      component: CmsComponent,
      children: [
        { path: 'analysis', component: CmsAnalysisComponent },
        { path: 'videos', component: CmsVideosComponent },
        { path: 'images', component: CmsImagesComponent },
        { path: 'broadcast', component: CmsBroadcastComponent },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
