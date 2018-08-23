import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BluechipFunctionsService {

  constructor(private datePipe:DatePipe) { }

  getStringDateFromLong(longDate:number):string{
      let dateString:string = null;


      if(longDate == undefined || longDate == null){
          console.log("Cannot process value of undefined")

      }else{
          dateString= this.datePipe.transform(longDate, 'mediumDate');
      }

      return dateString;
  }
}
