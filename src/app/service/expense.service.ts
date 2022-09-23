import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Friend, Expense, ExpenseModule, Action } from '../type';
import { getIndexFromArrayById } from '../share';
import { v4 as uuidv4 } from 'uuid';
import { FakeExpense0, FakeExpense1 } from '../template-for-test';
import { FriendsService } from './friends.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService{
  constructor(private friendsService: FriendsService){}
  
  // TODO: remove this after testing
  private expensesSubject = new BehaviorSubject<Expense[]>([FakeExpense0, FakeExpense1]);
  
  // private expensesSubject = new BehaviorSubject<Expense[]>([]);
  expenses = this.expensesSubject.asObservable();

  addExpense(expenseData: ExpenseModule): void {
    const expenses: Expense[] = this.expensesSubject.getValue();
    const newExpense: Expense = {
      uuid: uuidv4(),
      paidBy: expenseData.paidBy,
      shareWith: expenseData.shareWith,
      amount: expenseData.amount,
      description: expenseData.description
    };
    expenses.push(newExpense);
    this.expensesSubject.next(expenses);
  }

  removeExpense(id: string): void {
    const expenses: Expense[] = this.expensesSubject.getValue();
    const index = getIndexFromArrayById(expenses, id);
    expenses.splice(index, 1);
    this.expensesSubject.next(expenses);
  }

  editExpense(expense: Expense): void {
    const expenses: Expense[] = this.expensesSubject.getValue();
    const index = getIndexFromArrayById(expenses, expense.uuid);
    expenses[index].paidBy = expense.paidBy;
    expenses[index].shareWith = expense.shareWith;
    expenses[index].amount = expense.amount;
    expenses[index].description = expense.description;
    this.expensesSubject.next(expenses);
  }

  async initStep(): Promise<void> {
    // check if all the friends still alive.
    let friends: Friend[] = [];
    this.friendsService.friends.subscribe(friendsList => friends = friendsList);
    const expenses: Expense[] = this.expensesSubject.getValue();
    // TODO: optimize this.
    expenses.forEach(expense => {
      if (!friends.includes(expense.paidBy)){
        this.removeExpense(expense.uuid);
      }

      // TODO: remove the removed friends, not the whole expense.
      expense.shareWith.forEach(friend => {
        if (!friends.includes(friend)){
          this.removeExpense(expense.uuid);
        }
      });
    });
  }
}
