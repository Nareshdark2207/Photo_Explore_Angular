import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandhighlightsComponent } from './gallery/brandhighlights/brandhighlights.component';
import { BrandsComponent } from './gallery/brands/brands.component';
import { HighlightlistComponent } from './gallery/highlightlist/highlightlist.component';
import { ImagedetailsComponent } from './gallery/imagedetails/imagedetails.component';
import { PhotosComponent } from './gallery/photos/photos.component';
import { PhotoshighlightsComponent } from './gallery/photoshighlights/photoshighlights.component';
import { StorehighlightsComponent } from './gallery/storehighlights/storehighlights.component';
import { StoresComponent } from './gallery/stores/stores.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'brands',  component: BrandsComponent },
    { path: 'stores',  component: StoresComponent },
    { path: 'photos',  component: PhotosComponent },
    { path: 'highlightlist',  component: HighlightlistComponent },
    { path: 'brandhighlights',  component: BrandhighlightsComponent },
    { path: 'storehighlights',  component: StorehighlightsComponent },
    { path: 'photoshighlights',  component: PhotoshighlightsComponent },
    { path: 'imagedetails',  component: ImagedetailsComponent },

    { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
