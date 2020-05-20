import { Component, OnInit, DoCheck } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-search-comp',
  templateUrl: './search-comp.component.html',
  styleUrls: ['./search-comp.component.scss']
})
export class SearchCompComponent implements OnInit , DoCheck {

  constructor(private _dataServives:DataServiceService) { }
  images=[];
  id:number;

  ngOnInit(): void {
    this.images = this._dataServives.selectedImage;       
  }

  ngDoCheck(){

  }

}
