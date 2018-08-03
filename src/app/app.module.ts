import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DogPageComponent } from './dog-page/dog-page.component';
import { CatPageComponent } from './cat-page/cat-page.component';
import { VideoPageComponent } from './video-page/video-page.component';
const appRoutes: Routes = [
  { path: 'dog', component: DogPageComponent },
  { path: 'cat',component: CatPageComponent },
  { path: 'video',component: VideoPageComponent },
  { path: '',
    redirectTo: '/dog',
    pathMatch: 'full'
  },
  { path: '**', component: DogPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DogPageComponent,
    CatPageComponent,
    VideoPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
