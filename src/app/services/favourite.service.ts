import { Injectable } from '@angular/core';
import {Favourite} from "../model/favourite";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Locatable} from "../model/locatable";

@Injectable({
  providedIn: 'root'
})

export class FavouriteService {

  private urlEndPoint: string = 'https://goingto-open.azurewebsites.net/api/favourites';
  favourite: Favourite=new Favourite();

  constructor(private http: HttpClient) {
  }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  getallfavourites():Observable<Favourite[]>{
    return this.http.get<Favourite[]>(`${this.urlEndPoint}`)
  }


  getFavouritesbyuserid(userid): Observable<Favourite[]> {
    const url = 'https://goingto-open.azurewebsites.net/api/users'
    return this.http.get<Favourite[]>(`${url}/` + userid + `/favourites`)
  }

  save(): Observable<Favourite> {
    const url = 'https://goingto-open.azurewebsites.net/api/users'

    return this.http.post<Favourite>(`${url}/`+this.favourite.userId+`/locatables/`+this.favourite.locatableId, this.favourite,{headers:this.httpHeaders})
  }

  delete(locatableid): Observable<Favourite>
  {
    return this.http.delete<Favourite>('https://goingto-open.azurewebsites.net/api/users/' + 4 + '/locatables/' + locatableid, {headers: this.httpHeaders});
  }

}
