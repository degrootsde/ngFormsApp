import { TestBed, inject } from '@angular/core/testing';

import { QuestionControlValidatorService } from './question-control-validator.service';

describe('QuestionControlValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionControlValidatorService]
    });
  });

  it('should be created', inject([QuestionControlValidatorService], (service: QuestionControlValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
