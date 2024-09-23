import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../core/services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { QuestionModel } from '../../core/state/question.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  questions$ = this.questionsService.questions$;
  gettingQuestions$ = this.questionsService.gettingQuestions$;
  public countQuestionsSelected = new Set();
  public sizeQuestions: number = 0;
  public realQuestions?: QuestionModel[];
  public answerQuestions: any = {};
  getQuestionsSubscription: Subscription = this.route.queryParams
    .pipe(switchMap(params =>
      this.questionsService.getQuestions({
        type: params.type,
        amount: params.amount,
        difficulty: params.difficulty
      }).pipe(catchError((error: Error) => {
        window.alert(error.message);
        return of(error);
      }))
    )).subscribe();


  constructor(
    private readonly route: ActivatedRoute,
    private readonly questionsService: QuestionsService,
  ) { }

  ngOnInit(): void {
    this.questions$.subscribe((question) => {
      this.realQuestions = question;
      this.sizeQuestions = question.length;
    })
  }

  onAnswerClicked(questionId: QuestionModel['_id'], answerSelected: string): void {
    this.questionsService.selectAnswer(questionId, answerSelected);
    this.countQuestionsSelected.add(questionId);
    this.answerQuestions[questionId] = answerSelected;

    if(this.sizeQuestions === this.countQuestionsSelected.size){
      let message = '';
      this.realQuestions?.forEach((question, index) => {
        if(question.answers.find((answer) => answer.isCorrect)?._id === this.answerQuestions[question._id]){
          message += ` The question ${index + 1} is correct --`
          return;
        }
        message += ` The question ${index + 1} is not correct`
      })
      window.alert(message);
    }
  }

  

}
