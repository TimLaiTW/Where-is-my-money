import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExpenseDialogComponent } from '../../component/dialog/add-expense-dialog/add-expense-dialog.component';
import { ExpenseService } from '../../service/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent{

  constructor(public dialog: MatDialog, private expenseService: ExpenseService) { }

  openAddExpenseDialog(): void {
    const dialogRef = this.dialog.open(AddExpenseDialogComponent, {
      width: '15rem',
      height: '22rem'
    });

    dialogRef.afterClosed().subscribe(expenseData => {
      if(!expenseData){
        return;
      }

      this.expenseService.addExpense(expenseData);
    });
  }
}
