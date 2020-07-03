import { Injectable } from '@angular/core';
import {Locatable} from "../model/locatable";
import {Tplace} from "../model/tplace";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})

export class LocatableplaceService {

  private urlEndPoint:string ='https://goingto-open.azurewebsites.net/api/locatables';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})


  getPlaceByLocatableId(id):Observable<Tplace>{
    return this.http.get<Tplace>(`${this.urlEndPoint}/${id}/places`)
  }
}
