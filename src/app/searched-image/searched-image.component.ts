import { Component, OnInit} from '@angular/core';
import { DataServiceService } from '../data-service.service';



@Component({
  selector: 'app-searched-image',
  templateUrl: './searched-image.component.html',
  styleUrls: ['./searched-image.component.scss']
})
export class SearchedImageComponent implements OnInit {
  searchedTexts=[];                                                        // array for display chips button
  images=[]                                                                 // array of image
  constructor(private _dataService:DataServiceService) { }

  ngOnInit(): void {
    this.searchedTexts = this._dataService.searchedTexts;                   // assigning data to text array
  }
  

  fetchImage(data){
     this.images = JSON.parse(localStorage.getItem(data));                  // fetching data from local storage

  }
}
