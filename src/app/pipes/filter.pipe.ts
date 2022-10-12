import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchterm:any){
    if(value.length==0){
      return value
    }
     return value.filter((curelm: any)=>{
          return curelm.pname.toLowerCase().indexOf(searchterm)>-1
      })
  }
  

}
