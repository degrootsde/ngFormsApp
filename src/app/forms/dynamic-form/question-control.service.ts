import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { TextboxQuestion} from './question-textbox';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};
    
    questions.forEach(question => {
      var validators = [];

      if(question.required)
      validators.push(Validators.required);

      
      if(question instanceof TextboxQuestion){
        let tbQuestion: TextboxQuestion = question; 
        
        if(tbQuestion.minLength !== undefined || tbQuestion.minLength !== 0)
          {validators.push(Validators.minLength(tbQuestion.minLength))}
        if(tbQuestion.maxLength !== undefined || tbQuestion.maxLength !== 0)
          {validators.push(Validators.maxLength(tbQuestion.maxLength))}
        
        if(tbQuestion.type == 'email'){
          validators.push(Validators.email);
        }
        
        if(tbQuestion.validationRegex != ""){
          validators.push(Validators.pattern(tbQuestion.validationRegex));
        }
      }

      group[question.key] = new FormControl(question.value || '', validators);      
      
    });

    return new FormGroup(group);
  }
}
