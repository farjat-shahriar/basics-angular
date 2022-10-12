import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'custompipe'

})
export class UxPipes implements PipeTransform {
    transform(value: any,) {
        console.log(value);
        if (value.length>5) {
            return  value.substr(0,7) + '...'
        }
      else{
         return value
      }
    }
    
}


