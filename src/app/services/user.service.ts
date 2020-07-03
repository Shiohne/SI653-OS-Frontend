import { Injectable } from '@angular/core';
import { User} from '../model/user';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userid:number=4;
  private urlEndPoint:string ='https://goingto-open.azurewebsites.net/api/users';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getUsers():Observable<User[]> {
    //return of(CLIENTES);
    return this.http.get<User[]>(this.urlEndPoint);
    /*
    return this.http.get(this.urlEndPoint).pipe(
      map ((response)=>response as Cliente[])
    );*/

  }

  create(user: User): Observable<User>{
    return this.http.post<User>(this.urlEndPoint,user,{headers:this.httpHeaders})
  }

  getUser(id):Observable<User>{
    return this.http.get<User>(`${this.urlEndPoint}/${id}`)
  }



}
