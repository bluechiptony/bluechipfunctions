import { Component } from '@angular/core';
import {BluechipFunctionsService} from 'projects/bluechip-functions/src/lib/bluechip-functions.service'

@Component({
  selector: 'bl-chi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bl-chi';
  constructor(bchip:BluechipFunctionsService){
      this.title = bchip.getStringDateFromLong(1535021395000);
  }

}
