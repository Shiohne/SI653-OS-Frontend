import { Injectable } from '@angular/core';
import { City} from "../model/city";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Tplace} from "../model/tplace";


@Injectable({
  providedIn: 'root'
})

export class CityService {


  private urlEndPoint:string ='http://localhost:8080/api/cities';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getCities():Observable<City[]> {

    return this.http.get<City[]>(this.urlEndPoint);

  }

  getAllCitiesByCountryId(countryid):Observable<City[]>{
    const url='https://goingto-open.azurewebsites.net/api/countries'
    return this.http.get<City[]>(`${url}/`+countryid+`/cities`)
  }



}
