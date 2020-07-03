import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {FormsModule} from "@angular/forms";
import { SearchComponent} from "./pages/search/search.component";
import { PlaceComponent } from './pages/place/place.component';
import { ResultsComponent } from './pages/results/results.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes =[

  {path:'search',component:SearchComponent},
  {path:'place',component:PlaceComponent},
  {path:'results',component:ResultsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'favourites',component:FavouritesComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PlaceComponent,
    ResultsComponent,
    ProfileComponent,
    FavouritesComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
