import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private _dataServives:DataServiceService, private router:Router) { }
  
  title = 'webDevTest';                                         
  isHome:boolean;
  images=[];
  ngOnInit(){
    this.isHome=true;
    
  }
  // recieved data from service
  searchImages(data){
    if(data.value.length>0){
      this._dataServives.images(data.value).subscribe(res=>{this.images=res.hits;console.log(res.hits);
        localStorage.setItem(data.value,JSON.stringify(res.hits));});
      this._dataServives.searchedTexts.push(data.value);
    }
  }

 // selected images
  onImageSelect(image,obj:number){
    this.isHome = false;
    this.router.navigate(['/image',obj]);
    this._dataServives.setselectedImage(image);
  }

  // search image tab // landing page
  onHome(){
    this.isHome = true;
  }
  // searched image tab
  onSearched(){
    this.isHome = false;
    console.log(this.isHome)
  }
  
}
