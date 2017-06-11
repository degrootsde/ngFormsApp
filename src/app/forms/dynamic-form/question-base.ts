export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  helptext: string;
  validationMessages: string[];
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      helptext?: string,
      validationMessages?: string[]
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.helptext = options.helptext || '';
    this.validationMessages = options.validationMessages || [];
  }
}
