import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    return null;
    // if(!value){
    //   return value
    // }else{
    //   return value.filter((search)=>{
    //     return search.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    //   })
    // }

    // if(!value) return [];
    // if(!searchText) return value;
    //  searchText = searchText.toLowerCase();
    // return value.filter( (it) => {
    //   return it.toLowerCase().includes(searchText);
    // });
  }

}
