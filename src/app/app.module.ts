import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//https://stackoverflow.com/questions/37649164/how-to-add-bootstrap-to-an-angular-cli-project
//import { AlertModule} from 'ng2-bootstrap';

import { DynamicFormModule } from './forms/dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicFormModule,
    //AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
