import { Injectable } from '@angular/core';
import { Achievement} from "../model/achievement";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AchievementService {

  private urlEndPoint:string ='https://goingto-open.azurewebsites.net/api/users/';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getachievementsbyuserid():Observable<Achievement[]> {

    return this.http.get<Achievement[]>(this.urlEndPoint+2+'/achievements');


  }


}
