import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/navbar/home/home.component';
import { SubdivisionComponent } from './component/navbar/subdivision/subdivision.component';
import { GalleryComponent } from './component/navbar/gallery/gallery.component';
import { AboutUsComponent } from './component/navbar/about-us/about-us.component';
import { RegistryComponent } from './component/navbar/registry/registry.component';
import { InputComponent } from './component/navbar/input/input.component';
import { OutputComponent } from './component/navbar/output/output.component';
import { NotFoundComponent } from './component/navbar/not-found/not-found.component';
import { NewsComponent } from './component/navbar/news/news.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subdivision', component: SubdivisionComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent },
  { path: 'news', component: NewsComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SubdivisionComponent,
    GalleryComponent,
    AboutUsComponent,
    RegistryComponent,
    InputComponent,
    OutputComponent,
    NotFoundComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
