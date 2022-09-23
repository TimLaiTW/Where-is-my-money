import { Component, OnInit } from '@angular/core';
import { StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExpenseService } from '../service/expense.service';
import { BalanceService } from '../service/balance.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class StepperComponent implements OnInit {
  stepperOrientation: Observable<StepperOrientation>;
  readonly FRIEND_STEP_INDEX = 0;
  readonly EXPENSE_STEP_INDEX = 1;
  readonly REPORT_STEP_INDEX = 2;

  constructor(
    breakpointObserver: BreakpointObserver, 
    private expenseService: ExpenseService, 
    private balanceService: BalanceService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

  async selectionChange(event: StepperSelectionEvent){
    // Always reset the completed flag when entering a step.
    event.selectedStep.completed = false;
    if (event.selectedIndex === this.EXPENSE_STEP_INDEX){
      await this.expenseService.initStep();
    }
    else if (event.selectedIndex === this.REPORT_STEP_INDEX){
      await this.balanceService.initStep();
    }
  }
}
