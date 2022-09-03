import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExpenseDialogComponent } from 'src/app/component/dialog/add-expense-dialog/add-expense-dialog.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent{

  constructor(public dialog: MatDialog) { }

  openAddExpenseDialog(): void {
    const dialogRef = this.dialog.open(AddExpenseDialogComponent, {
      width: '15rem',
      height: '22rem',
      data: {name: ''},
    });

    dialogRef.afterClosed().subscribe(event => {
      if(!event){
        return;
      }

    });
  }
}
