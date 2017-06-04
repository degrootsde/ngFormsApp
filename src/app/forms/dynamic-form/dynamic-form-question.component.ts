import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase }     from './question-base';
@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  
  get isValid() { return this.form.controls[this.question.key].valid; }
  get isTouched() {return this.form.controls[this.question.key].touched;}
  get isSuccess(){return this.isValid && this.isTouched};
  toggleCheckBox(event, key): void{
    
    this.form.value[key] = event.target.checked; 
  }
}