import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(fullName:string,gender:string): any { 
    if(gender.toUpperCase()=="FEMALE"){
      return "Ms. "+fullName;
    }else{
      return "Mrs. "+fullName;
    }
  }

}
