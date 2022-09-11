import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Friend, ExpenseData, ExpenseDialog } from '../../../type';
import { FriendsService } from '../../../service/friends.service';

// testing
interface Food {
  value: string;
  viewValue: string;
}
// testing

@Component({
  selector: 'app-module-expense-dialog',
  templateUrl: './module-expense-dialog.component.html',
  styleUrls: ['./module-expense-dialog.component.scss']
})
export class ModuleExpenseDialogComponent{
  friends: Friend[] = [];

  expense = new FormGroup({
    paidBy: new FormControl(null, Validators.required),
    shareWith: new FormControl(null, Validators.required),
    amount: new FormControl(null, Validators.required),
    description: new FormControl('')
  });

  constructor(
    private dialogRef: MatDialogRef<ModuleExpenseDialogComponent>, 
    private friendsService: FriendsService,
    @Inject(MAT_DIALOG_DATA) public data: ExpenseDialog) { 
      this.expense.controls['paidBy']?.setValue(data.paidBy);
      this.expense.controls['shareWith']?.setValue(data.shareWith);
      this.expense.controls['amount']?.setValue(data.amount);
      this.expense.controls['description']?.setValue(data.description);
    }

  ngOnInit(): void {
    this.friendsService.friends.subscribe(
      friends => this.friends = friends);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAction(event: string): void {
    const response = {
      event,
      data: this.getExpense()
    }

    this.dialogRef.close(response);
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

  getExpense(): ExpenseData {
    return {
      paidBy: this.expense.value.paidBy,
      shareWith: this.expense.value.shareWith,
      amount: this.expense.value.amount,
      description: this.expense.value.description
    };
  }
}

