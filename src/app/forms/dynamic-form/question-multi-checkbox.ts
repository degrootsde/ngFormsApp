import { QuestionBase } from './question-base';

export class MultiCheckBoxQuestion extends QuestionBase<{checked: boolean, key: string, value: string}[]> {
  controlType = 'multi-checkbox';
  options: {checked: boolean, key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }

  toggleValue(key){
    this.options[key].checked = !this.options[key].checked;
    this.value = this.options;
  }

}
