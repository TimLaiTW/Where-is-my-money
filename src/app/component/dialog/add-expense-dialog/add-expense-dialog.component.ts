import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Friend, ExpenseModule } from '../../../type';
import { FriendsService } from '../../../service/friends.service';

@Component({
  selector: 'app-add-expense-dialog',
  templateUrl: './add-expense-dialog.component.html',
  styleUrls: ['./add-expense-dialog.component.scss']
})
export class AddExpenseDialogComponent implements OnInit{
  friends: Friend[] = [];

  expense = new FormGroup({
    paidBy: new FormControl(null, Validators.required),
    shareWith: new FormControl(null, Validators.required),
    amount: new FormControl(null, Validators.required),
    description: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<AddExpenseDialogComponent>, 
    private friendsService: FriendsService,
    @Inject(MAT_DIALOG_DATA) public expenseData: ExpenseModule) { }

  ngOnInit(): void {
    this.friendsService.friends.subscribe(
      friends => this.friends = friends);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  
  get paidBy() { 
    return this.expense.get('paidBy'); 
  }
  
  get shareWith() { 
    return this.expense.get('shareWith'); 
  }

  get amount() { 
    return this.expense.get('amount'); 
  }

  get description() {
    return this.expense.get('description');
  }

  getExpenseData(): ExpenseModule {
    return {
      paidBy: this.expense.value.paidBy,
      shareWith: this.expense.value.shareWith,
      amount: this.expense.value.amount,
      description: this.expense.value.description
    };
  }
}
