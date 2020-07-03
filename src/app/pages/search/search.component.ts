import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../services/category.service";
import {Country} from "../../model/country";
import {CountryService} from "../../services/country.service";
import {Currency} from "../../model/currency";
import {CurrencyService} from "../../services/currency.service";
import {Language} from "../../model/language";
import {LanguageService} from "../../services/language.service";
import {Tplace} from "../../model/tplace";
import {TplaceService} from "../../services/tplace.service";
import {City} from "../../model/city";
import {CityService} from "../../services/city.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  category:Category[];
  country: Country[];
  currency: Currency[];
  language: Language[];
  city: City[];
  tplace: Tplace[];

  //VARIABLES FILTRO
  selectedcity:number = 0;
  selectedcountry:number = 0;
  selectedcategory:number = 0;

  constructor(private categoryService:CategoryService, private countryService:CountryService, public cityService:CityService,
              private currencyService:CurrencyService, private  languageService:LanguageService, public placeService: TplaceService) { }


  ngOnInit(){
    this.categoryService.getCategories().subscribe(
      (category)=> this.category=category
    );
    this.countryService.getCountries().subscribe(
      (country)=> this.country=country
    );
    this.currencyService.getCurrencies().subscribe(
      (currency)=> this.currency=currency
    );
    this.languageService.getLanguages().subscribe(
      (language)=> this.language = language
    );

  }

  resultados(){

    if (this.selectedcity!=null && this.selectedcategory!=null){
      this.placeService.Filtro(this.selectedcategory, this.selectedcity).subscribe(
        tplace=>this.tplace=tplace
      );
    }
  }

  resultadosfiltrocity(event: any){
    this.selectedcity=event.target.value;
    this.placeService.getAllCitiesByPlaceId(this.selectedcity).subscribe(
      tplace=>this.tplace=tplace
    )
  }

  resultadosfiltrocategory(event: any){
    this.selectedcategory=event.target.value;
    this.placeService.getallplacesbycategoryid(this.selectedcategory).subscribe(
      tplace=>this.tplace=tplace
    )
  }


  resultadoscity(event:any){
  this.selectedcountry=event.target.value
    this.cityService.getAllCitiesByCountryId(this.selectedcountry).subscribe(
      (city)=> this.city=city
    );
  }


}
