import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CmsComponent } from './cms/cms.component';
import { CmsImagesComponent } from './cms-images/cms-images.component';
import { CmsAnalysisComponent } from './cms-analysis/cms-analysis.component';
import { CmsVideosComponent } from './cms-videos/cms-videos.component';
import { CmsBroadcastComponent } from './cms-broadcast/cms-broadcast.component';
import { CmsAnalyticsComponent } from './cms-analytics/cms-analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    CmsComponent,
    CmsImagesComponent,
    CmsAnalysisComponent,
    CmsVideosComponent,
    CmsBroadcastComponent,
    CmsAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
