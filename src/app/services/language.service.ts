import { Injectable } from '@angular/core';
import {Language} from "../model/language";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  private urlEndPoint:string ='https://goingto-open.azurewebsites.net/api/languages';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getLanguages():Observable<Language[]> {
    //return of(Categories);
    return this.http.get<Language[]>(this.urlEndPoint);
    /*
    return this.http.get(this.urlEndPoint).pipe(
      map ((response)=>response as Cliente[])
    );*/

  }




}
