import { Injectable } from '@angular/core';
import {Locatable} from "../model/locatable";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../model/user";
import {City} from "../model/city";

@Injectable({
  providedIn: 'root'
})

export class LocatableService {

  private urlEndPoint:string ='https://goingto-open.azurewebsites.net/api/locatables';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getLocatables():Observable<Locatable[]> {

    return this.http.get<Locatable[]>(this.urlEndPoint);

  }
  getLocatable(id):Observable<Locatable>{
    return this.http.get<Locatable>(`${this.urlEndPoint}/${id}`)
  }

  getFavourites(userid): Observable<Locatable[]> {
    const url = 'https://goingto-open.azurewebsites.net/api/users/'
    return this.http.get<Locatable[]>(`${url}`+userid+`/locatables`)

  }


  }
