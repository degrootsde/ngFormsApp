import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import {DynamicFormComponent} from './dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [DynamicFormComponent, DynamicFormQuestionComponent ],
    exports: [DynamicFormComponent, DynamicFormQuestionComponent]

})
export class DynamicFormModule{
     constructor(){
         
     }
}