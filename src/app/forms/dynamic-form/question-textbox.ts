import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  validationRegex: string;
  minLength: number;
  maxLength: number;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.validationRegex = options['validationRegex'] || '';
    this.minLength = options['minLength' || 0];
    this.maxLength = options['maxLength' || 0];
  }
}
