import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { ExpenseService } from '../../service/expense.service';
import { Friend, Expense, ExpenseData, Action, ActionResponse } from '../../type'; 
import { MatTableDataSource} from '@angular/material/table';
import { ModuleExpenseDialogComponent } from '../dialog/module-expense-dialog/module-expense-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { getExpenseObjectFromArrayById, getStringFromArray } from '../../share';

@Component({
  selector: 'app-expense-list-table',
  templateUrl: './expense-list-table.component.html',
  styleUrls: ['./expense-list-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpenseListTableComponent implements OnInit{
  expenses: Expense[] = [];
  dataSource = new MatTableDataSource<Expense>([]);

  constructor(public dialog: MatDialog, private expenseService: ExpenseService){
  }

  ngOnInit(): void {
    this.expenseService.expenses.subscribe(
      expenses => {
        this.dataSource.data = expenses;
        this.expenses = expenses;
      });
  }

  columnsToDisplay = ['paid-by', 'share-with', 'amount', 'action'];
  expandedElement: ExpenseData | null = null;

  onEditEvent(response: ActionResponse){
    if (response.action === Action.EDIT && response.id){
      const expense = getExpenseObjectFromArrayById(this.expenses, response.id);
      this.openEditExpenseDialog(expense);
    }
    else if (response.action === Action.REMOVE && response.id){
      this.expenseService.removeExpense(response.id);
    }
  }

  openEditExpenseDialog(expense: Expense): void {
    const dialogRef = this.dialog.open(ModuleExpenseDialogComponent, {
      width: '15rem',
      height: '22rem',
      data: {
        action: Action.EDIT,
        title: 'Edit',
        uuid: expense.uuid,
        paidBy: expense.paidBy,
        shareWith: expense.shareWith,
        amount: expense.amount,
        description: expense.description,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result || result.event === 'Cancel'){
        return;
      }
      else if (result.event === 'Save') {
        const expenseDataWithId: Expense = {
          uuid: expense.uuid,
          paidBy: result.data.paidBy,
          shareWith: result.data.shareWith,
          amount: result.data.amount,
          description: result.data.description
        };
        this.expenseService.editExpense(expenseDataWithId);
      }
      else if (result.event === 'Remove'){
        this.expenseService.removeExpense(result.data.id);
      }
    });
  }

  getStringFromFriends(friends: Friend[]): string{
    const friendsName: string[] = friends.map(friend => friend.name);
    return getStringFromArray(friendsName);
  }
}