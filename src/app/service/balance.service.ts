import { Injectable } from '@angular/core';
import { FriendsService } from './friends.service';
import { Friend, Expense, Action } from '../type';
import { ExpenseService } from './expense.service';

@Injectable({
  providedIn: 'root'
})
export class BalanceService{
  friends: Friend[] = [];
  expenses: Expense[] = [];
  constructor(private friendService: FriendsService, private expenseService: ExpenseService) { }

  async initStep() : Promise<void> {
    //TODO: really need subscribe for one time initial?
    this.friendService.friends.subscribe(
      friends => {
        this.friends = friends;
      });
    this.expenseService.expenses.subscribe(
      expenses => {
        this.expenses = expenses;
      });

    this.friendService.resetBalance();
    this.expenses.forEach(expense => {
      this.amountForPaidBy(expense);
      this.amountForShareWith(expense);
    });
  }

  // TODO: optimize the calculation.
  amountForPaidBy(expense: Expense): void {
    let paidBy = expense.paidBy;
    paidBy['balance'] += expense.amount;
    this.friendService.editFriend(paidBy);
  }

  // TODO: optimize the calculation.
  amountForShareWith(expense: Expense): void {
    const amountPerFriend = expense.amount / expense.shareWith.length;
    expense.shareWith.forEach(friend => {
      friend['balance'] -= amountPerFriend;
      this.friendService.editFriend(friend);
    });
  }
}
