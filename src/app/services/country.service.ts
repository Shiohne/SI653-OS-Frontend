import { Injectable } from '@angular/core';
import {Country} from "../model/country";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  private urlEndPoint:string = 'https://goingto-open.azurewebsites.net/api/countries';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getCountries():Observable<Country[]> {
    //return of(Categories);
    return this.http.get<Country[]>(this.urlEndPoint);
    /*
    return this.http.get(this.urlEndPoint).pipe(
      map ((response)=>response as Cliente[])
    );*/

  }

  getcountrybyid(id):Observable<Country>{
    return this.http.get<Country>(`${this.urlEndPoint}/${id}`);
  }




}
