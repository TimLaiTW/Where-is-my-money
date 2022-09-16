import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Friend, Expense, ExpenseData, Action } from '../type';
import { getExpenseObjectFromArrayById, getIndexFromArrayById } from '../share';
import { v4 as uuidv4 } from 'uuid';
import { FakeExpense0, FakeExpense1 } from '../template-for-test';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(){}
  
  // TODO: remove this after testing
  private expensesSubject = new BehaviorSubject<Expense[]>([FakeExpense0, FakeExpense1]);
  
  // private expensesSubject = new BehaviorSubject<Expense[]>([]);
  expenses = this.expensesSubject.asObservable();

  addExpense(expenseData: ExpenseData): void {
    const expensesList: Expense[] = this.expensesSubject.getValue();
    const newExpense: Expense = {
      uuid: uuidv4(),
      paidBy: expenseData.paidBy,
      shareWith: expenseData.shareWith,
      amount: expenseData.amount,
      description: expenseData.description
    };
    expensesList.push(newExpense);
    this.expensesSubject.next(expensesList);
  }

  removeExpense(id: string): void {
    const expensesList: Expense[] = this.expensesSubject.getValue();
    const removedExpense: Expense = getExpenseObjectFromArrayById(expensesList, id);
    const index = getIndexFromArrayById(expensesList, id);
    expensesList.splice(index, 1);
    this.expensesSubject.next(expensesList);
  }

  editExpense(expense: Expense): void {
    const expensesList: Expense[] = this.expensesSubject.getValue();
    const index = getIndexFromArrayById(expensesList, expense.uuid);
    expensesList[index].paidBy = expense.paidBy;
    expensesList[index].shareWith = expense.shareWith;
    expensesList[index].amount = expense.amount;
    expensesList[index].description = expense.description;
    this.expensesSubject.next(expensesList);
  }
}
