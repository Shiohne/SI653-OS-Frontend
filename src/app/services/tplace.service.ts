import { Injectable } from '@angular/core';
import {Tplace} from "../model/tplace";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class TplaceService {

  placeid:number;

  private urlEndPoint:string ='https://goingto-open.azurewebsites.net/api/places';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getTplaces():Observable<Tplace[]> {
    //return of(Categories);
    return this.http.get<Tplace[]>(this.urlEndPoint);


  }

  getTplace():Observable<Tplace>{
    return this.http.get<Tplace>(`${this.urlEndPoint}/${this.placeid}`)
  }

  getAllCitiesByPlaceId(cityid):Observable<Tplace[]>{
    const url='https://goingto-open.azurewebsites.net/api/cities'
    return this.http.get<Tplace[]>(`${url}/`+cityid+`/places`)
  }

  Filtro(categoryid, cityid):Observable<Tplace[]>{
    const url= 'https://goingto-open.azurewebsites.net/api/categories'
    return this.http.get<Tplace[]>(`${url}/`+categoryid+`/cities/`+cityid+`/places`)

  }

  getallplacesbycategoryid(categoryid):Observable<Tplace[]>{
    const url= 'https://goingto-open.azurewebsites.net/api/categories'
    return this.http.get<Tplace[]>(`${url}/`+categoryid+`/places`)
  }

  getplacebylocatableid(locatableid):Observable<Tplace>{
    const url= 'https://goingto-open.azurewebsites.net/api/locatables'
    return this.http.get<Tplace>(`${url}/`+locatableid+`/places`)
  }

}
