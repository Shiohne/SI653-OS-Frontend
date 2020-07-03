import { Injectable } from '@angular/core';
import { Review} from "../model/review";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  public review :Review=new Review();


  private urlEndPoint:string ='https://goingto-open.azurewebsites.net/api/reviews';
  constructor(private http:HttpClient) { }

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  getreviewsbylocatableid(locatatableid):Observable<Review[]> {

    const url ="https://goingto-open.azurewebsites.net/api/locatables/"
    return this.http.get<Review[]>(`${url}/`+locatatableid+`/reviews`)


  }

  postreview():Observable<Review>{
    const url ="https://goingto-open.azurewebsites.net/api/user_profiles/"
    return this.http.post<Review>(url+this.review.userId+'/locatables/'+this.review.locatableId+'/reviews',this.review)
  }

  getreviewsbyprofileid(id):Observable<Review[]>{
    const url ="https://goingto-open.azurewebsites.net/api/user_profiles/"
    return this.http.get<Review[]>(url+id+'/reviews')
  }

  putreview():Observable<Review>{
    const url ="https://goingto-open.azurewebsites.net/api/reviews/"
    return this.http.put<Review>(url+this.review.id,this.review)
  }
  deletereview(id):Observable<Review>{
    const url ="https://goingto-open.azurewebsites.net/api/reviews/"
    return this.http.delete<Review>(url+id)
  }


}
