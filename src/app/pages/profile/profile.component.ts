import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {LocatableService} from "../../services/locatable.service";
import {Locatable} from "../../model/locatable";
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../model/profile";
import {CountryService} from "../../services/country.service";
import {Country} from "../../model/country";
import {Achievement} from "../../model/achievement";
import {AchievementService} from "../../services/achievement.service";
import {Review} from "../../model/review";
import {ReviewService} from "../../services/review.service";
import {Tplace} from "../../model/tplace";
import {TplaceService} from "../../services/tplace.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  profile:Profile= new Profile();
  country: Country= new Country();
  achievement:Achievement[];
  places: Tplace[]
  review:Review[];
  putreview:Review;
  place:Tplace;
  modalref:NgbModalRef
  constructor(private userService:UserService, public profileService:ProfileService, public countryService:CountryService,
              public achievementService:AchievementService, public reviewService:ReviewService, public tplaceService: TplaceService,
              public modal:NgbModal, public router:Router) { }

  ngOnInit(){

    this.userService.getUser(4).subscribe(
      user=>this.user=user
    );
    this.profileService.getUserprofilebyUserid(4).subscribe(
      profile=>this.profile=profile
    );
    this.achievementService.getachievementsbyuserid().subscribe(
      achievement=>this.achievement=achievement
    );
    this.tplaceService.getTplaces().subscribe(
      tplaces=>this.places=tplaces
    )

  }

  loadcountry(id){
    this.countryService.getcountrybyid(id).subscribe(
      country=>this.country=country
    )
  }
  loadreviews(){
    this.reviewService.getreviewsbyprofileid(this.profile.id).subscribe(
      review=> this.review=review
    )
  }

  deletereview(id){
    this.reviewService.deletereview(id).subscribe()
  }

  mostrarplace(id){
    for(let i=0;i<this.places.length;i++){
      if(this.places[i].id==id){
        this.place=this.places[i];
      }
    }
  }

  getreview(review){
    this.reviewService.review=review
  }
  put() {
    this.reviewService.putreview().subscribe(
      response => this.router.navigate(['reviews'])
    )
  }

  getcomment(comment){
    this.reviewService.review.comment=comment.target.value
  }
}
