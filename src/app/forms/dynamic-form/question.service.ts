import { Injectable }       from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { CheckboxQuestion}  from './question-checkbox';
import { MultiCheckBoxQuestion } from './question-multi-checkbox';

@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous

  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        value: 'good',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'},
        ],
        order: 3,
        helptext: 'Show me what you`re capable of'
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
        helptext: 'Do you remember what your mom called you?'
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        value: 'bombastootje@gmail.com',
        type: 'email',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'zipCode',
        label: 'Zip code (dutch format)',
        value: '1234AA',
        required: true,
        order: 3,
        validationRegex: '[1-9]{4}[A-Z]{2}',     
        helptext: 'Zip your address (1234AA)?'
      }),
      new CheckboxQuestion({
        key: 'hired',
        label: 'Hired',
        type: 'checkbox',
        checked: true,
        order: 4
      }),
      new MultiCheckBoxQuestion({
        key: 'goals',
        value: ['villanfree'],
        label: 'Goals as a Hero',
        options: [
          { checked: true, key: 'villainfree',  value: 'To live in a villain free world'},
          { checked: false, key: 'stronger',  value: 'To get stronger every day'},
          { checked: false, key: 'skills',   value: 'To gain more skills every day'},
          { checked: false, key: 'teach', value: 'To teach young hero`s'}
        ],
        order: 6,
        helptext: 'What would you like to accomplish in the long run?'
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
