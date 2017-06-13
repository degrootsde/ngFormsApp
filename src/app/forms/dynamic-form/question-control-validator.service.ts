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
      {resourceMessage.push("Error in character sequence")}
    if(errors.minLength)
      {resourceMessage.push("To few charachters")}
    if(errors.maxLength)
      {resourceMessage.push("To many characters")}
    return resourceMessage;
  }
}
