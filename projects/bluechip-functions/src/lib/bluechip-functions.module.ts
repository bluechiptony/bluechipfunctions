import { NgModule } from '@angular/core';
import { BluechipFunctionsComponent } from './bluechip-functions.component';
import { BluechipFunctionsService } from './bluechip-functions.service';
import {DatePipe} from '@angular/common';

@NgModule({
  imports: [
    BluechipFunctionsService
  ],
  providers:[
    BluechipFunctionsService,
    DatePipe
  ],
  declarations: [BluechipFunctionsComponent],
  exports: [BluechipFunctionsComponent]
})
export class BluechipFunctionsModule { }
