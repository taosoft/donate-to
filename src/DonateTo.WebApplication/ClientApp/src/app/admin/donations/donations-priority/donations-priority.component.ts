import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DonationRequestModel, QuestionModel } from 'src/app/shared/models';
import { DataUpdatedService } from 'src/app/shared/async-services/data-updated.service';
import { Subscription } from 'rxjs';
import { ControlType } from 'src/app/shared/enum/controlTypes';
import { QuestionResult } from 'src/app/shared/models/question-result.model';
import { QuestionAnswer } from 'src/app/shared/models/question-answer.model';
import { DonationsSandbox } from '../donations.sandbox';
import { QuestionsSandbox } from '../../questions/questions.sandbox';
import { ControlTypeModel } from 'src/app/shared/models/control-type.model';
@Component({
  selector: 'app-donations-priority',
  templateUrl: './donations-priority.component.html',
  styleUrls: ['./donations-priority.component.less'],
})
export class DonationPriorityComponent implements OnInit, OnDestroy {
  @Output() isSubmited = new EventEmitter<boolean>();

  form: FormGroup;
  questions: QuestionModel[];
  questionResult: QuestionResult;
  private subscriptions: Subscription[] = [];
  private donationRequest: DonationRequestModel;
  valid = true;
  textboxRangeValid = true;

  get controlTypeEnum() {
    return ControlType;
  }

  constructor(
    private dataUpdated: DataUpdatedService,
    public questionSandbox: QuestionsSandbox,
    public donationSandbox: DonationsSandbox
  ) {}

  ngOnInit(): void {
    this.questionSandbox.loadQuestions();
    this.registerEvents();
  }

  ngOnDestroy(): void {
    this.unregisterEvents();
  }

  registerEvents(): void {
    this.subscriptions.push(
      this.questionSandbox.questions$.subscribe((questions) => {
        this.questions = questions;
        this.form = this.toFormGroup(this.questions);
      })
    );
    this.subscriptions.push(
      this.donationSandbox.donationRequest$.subscribe((donationRequest) => {
        this.donationRequest = donationRequest;
      })
    );
  }

  private unregisterEvents() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private validateFormGroup(formGroup: FormGroup) {
    for (const i in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(i)) {
        formGroup.controls[i].markAsDirty();
        formGroup.controls[i].updateValueAndValidity();
      }
    }
  }

  onSubmit() {
    this.validateFormGroup(this.form);
    if (this.valid && this.validTexboxAnswer()) {
      this.addQuestionsSubmited();
      this.questionSandbox.updateQuestionsResult(this.questionResult);
      this.dataUpdated.changeMessage(true);
      this.isSubmited.emit(true);
    }
  }

  toFormGroup(questions: QuestionModel[]) {
    const group: any = {};
    questions.forEach((question) => {
      group[question.id] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  isValid(question: QuestionModel) {
    this.valid = this.form.controls[question.id].valid;
  }

  /**
   * Validates that the textbox answer is between the max and min value
   * @returns boolean
   */
  validTexboxAnswer(): boolean {
    let result = true;

    this.questions.forEach((question) => {
      if (question.controlTypeId === ControlType.Textbox) {
        const value = this.form.controls[question.id].value;
        if (value < question.min || value > question.max) {
          result = false;
          this.textboxRangeValid = false;
        }
      }
    });

    return result;
  }

  addQuestionsSubmited(): void {
    this.questionResult = new QuestionResult();
    let answersQuestion: QuestionAnswer[] = [];
    this.questions.forEach((question) => {
      const answerQuestion = new QuestionAnswer();
      answerQuestion.idQuestion = question.id;
      answerQuestion.value = this.form.controls[question.id].value;
      answersQuestion = [...answersQuestion, answerQuestion];
    });
    this.questionResult.donationRequestId = this.donationRequest.id;
    this.questionResult.questionAnswers = answersQuestion;
  }
}
