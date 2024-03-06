import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './gallery/brands/brands.component';
import { StoresComponent } from './gallery/stores/stores.component';
import { PhotosComponent } from './gallery/photos/photos.component';
import { HighlightlistComponent } from './gallery/highlightlist/highlightlist.component';
import { ImagedetailsComponent } from './gallery/imagedetails/imagedetails.component';
import { BrandhighlightsComponent } from './gallery/brandhighlights/brandhighlights.component';
import { StorehighlightsComponent } from './gallery/storehighlights/storehighlights.component';
import { PhotoshighlightsComponent } from './gallery/photoshighlights/photoshighlights.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    StoresComponent,
    PhotosComponent,
    HighlightlistComponent,
    ImagedetailsComponent,
    BrandhighlightsComponent,
    StorehighlightsComponent,
    PhotoshighlightsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    CarouselModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
