import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Friend, Expense, ExpenseData } from '../type';
import { getIndexFromArrayById } from '../constants';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expensesSubject = new BehaviorSubject<Expense[]>([]);
  expenses = this.expensesSubject.asObservable();

  addExpense(expenseData: ExpenseData): void {
    const expensesList: Expense[] = this.expensesSubject.getValue();
    expensesList.push({
      uuid: uuidv4(),
      paidBy: expenseData.paidBy,
      shareWith: expenseData.shareWith,
      amount: expenseData.amount,
      description: expenseData.description
    });
    this.expensesSubject.next(expensesList);
  }

  removeExpense(id: string): void {
    const expensesList: Expense[] = this.expensesSubject.getValue();
    const index = getIndexFromArrayById(expensesList, id);
    expensesList.splice(index, 1);
    this.expensesSubject.next(expensesList);
  }

  editExpense(id: string, paidBy: Friend, shareWith: Friend[], amount: number, description?: string): void {
    const expensesList: Expense[] = this.expensesSubject.getValue();
    const index = getIndexFromArrayById(expensesList, id);
    expensesList[index].paidBy = paidBy;
    expensesList[index].shareWith = shareWith;
    expensesList[index].amount = amount;
    expensesList[index].description = description;
    this.expensesSubject.next(expensesList);
  }
}
