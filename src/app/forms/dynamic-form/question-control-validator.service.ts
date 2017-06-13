import { Injectable } from '@angular/core';

@Injectable()
export class QuestionControlValidatorService {

  constructor() { }

  getErrorResources(errors: any){
    var resourceMessage = [];
    if(errors.required)
      {resourceMessage.push("Required")}
    if(errors.email)
      {resourceMessage.push("Wrong email format")}
    if(errors.pattern)
      {resourceMessage.push("Error in haracter sequence")}
    return resourceMessage;
  }
}
