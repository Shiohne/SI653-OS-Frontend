import { Injectable } from '@angular/core';
import {Currency} from "../model/currency";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  private urlEndPoint:string ='https://goingto-open.azurewebsites.net/api/currencies';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getCurrencies():Observable<Currency[]> {
    //return of(Categories);
    return this.http.get<Currency[]>(this.urlEndPoint);
    /*
    return this.http.get(this.urlEndPoint).pipe(
      map ((response)=>response as Cliente[])
    );*/

  }




}
