import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase }     from './question-base';
import { QuestionControlValidatorService } from './question-control-validator.service';

@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html',
  providers: [QuestionControlValidatorService]
})

export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor(private qcvs: QuestionControlValidatorService){

  }

  
  get isValid() { return this.form.controls[this.question.key].valid; }
  get isTouched() {return this.form.controls[this.question.key].touched;}
  get isSuccess(){return this.isValid && this.isTouched};
  get errors(){
    var errors = this.form.controls[this.question.key].errors; 
    if(errors == null) return [];
    return this.qcvs.getErrorResources(errors);
  };
  toggleCheckBox(event, key): void{
    
    this.form.value[key] = event.target.checked; 
  }
}
