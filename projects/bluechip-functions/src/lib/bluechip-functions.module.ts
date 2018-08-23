import { NgModule } from '@angular/core';
import { BluechipFunctionsComponent } from './bluechip-functions.component';
import { BluechipFunctionsService } from './bluechip-functions.service';

@NgModule({
  imports: [
  ],
  providers:[
    BluechipFunctionsService
  ],
  declarations: [BluechipFunctionsComponent],
  exports: [BluechipFunctionsComponent]
})
export class BluechipFunctionsModule { }
