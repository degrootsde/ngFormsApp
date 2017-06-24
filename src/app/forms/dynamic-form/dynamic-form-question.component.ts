import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase }     from './question-base';
import { QuestionControlValidatorService } from './question-control-validator.service';
import { MultiCheckBoxQuestion } from './question-multi-checkbox'; 

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
  toggleMultiCheckbox(target, questionKey, controlKey)
  {
    var q = this.question as MultiCheckBoxQuestion;
    q.options.forEach(
      option => {if(option.key == controlKey){
        option.checked = !option.checked;
      }}
    )
    this.form.value[questionKey] =  q.options;
    
  }
}
