import { Component } from '@angular/core';
import { QuestionService } from './forms/dynamic-form/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})

export class AppComponent {
  questions: any[];

  constructor(service: QuestionService){
    this.questions = service.getQuestions();
  }
  
  title = 'Model drive form with Material look';
}
