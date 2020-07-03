import { Injectable } from '@angular/core';
import { Category} from '../model/category';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private urlEndPoint:string ='https://goingto-open.azurewebsites.net/api/categories';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getCategories():Observable<Category[]> {
    //return of(Categories);
    return this.http.get<Category[]>(this.urlEndPoint);
    /*
    return this.http.get(this.urlEndPoint).pipe(
      map ((response)=>response as Cliente[])
    );*/

  }


}
