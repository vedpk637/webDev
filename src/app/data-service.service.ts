import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  constructor(private http:HttpClient ) {}

  API_KEY = '16605219-537f0a583adfa8eb5ce252fe9';                     // key
  url:string = "https://pixabay.com/api/?key="+this.API_KEY+"&q=";    // url

// stores api with input "data"
  images(data):Observable<any>{
    return  this.http.get(this.url+encodeURIComponent(data));
  }

  selectedImage=[];                                        // stores image recieved form onClick on image of landing page
  searchedTexts=[];                                       // stores input text recieved from input of landing page
  isHome= new BehaviorSubject<any>(true);                 // search box true/false
   
  // to show clicked image on another page ==> search-comp
  setselectedImage(image){
    this.selectedImage.shift();
    this.selectedImage.push(image);
  }

}
