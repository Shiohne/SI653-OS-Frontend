import { Component, OnInit } from '@angular/core';
import {Favourite} from "../../model/favourite";
import {FavouriteService} from "../../services/favourite.service";
import {Locatable} from "../../model/locatable";
import {LocatableService} from "../../services/locatable.service";
import {Tplace} from "../../model/tplace";
import {TplaceService} from "../../services/tplace.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  userid:number;
  tplaces:Tplace[];
  locatable:Locatable[];
  locatableid:number;
  tplace:Tplace;
  favourites:Favourite[];
  favourite:Favourite


  constructor(private locatableService:LocatableService, public tplaceService:TplaceService, private favouriteService: FavouriteService) { }

  ngOnInit() {
    this.locatableService.getFavourites(4).subscribe(
      (locatable)=>this.locatable=locatable
    )
    this.tplaceService.getTplaces().subscribe(
      tplaces=>this.tplaces=tplaces
    )
    this.favouriteService.getFavouritesbyuserid(4).subscribe(
      favourite=>this.favourites=favourite
    )
  }

  mostrarfavoritos(id:number){

    for(let i=0;i<this.tplaces.length;i++){
      if(this.tplaces[i].id==(id-6)){
        this.tplace=this.tplaces[i];
      }
    }
    for(let i=0;i<this.favourites.length;i++){
      if(this.favourites[i].locatableId==id){
        this.favourite=this.favourites[i];
      }
    }


    }

  click(id:number){

    for(let i=0;i<this.tplaces.length;i++){
      if(this.tplaces[i].id==(id-6)){
        this.tplaceService.placeid=this.tplaces[i].id;
      }
    }
  }

  delete(id){
    this.favouriteService.delete(id).subscribe()
  }


}
