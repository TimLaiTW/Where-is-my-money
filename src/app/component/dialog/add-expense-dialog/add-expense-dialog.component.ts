import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Friend } from '../../../type';
import { FriendsService } from '../../../service/friends.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-expense-dialog',
  templateUrl: './add-expense-dialog.component.html',
  styleUrls: ['./add-expense-dialog.component.scss']
})
export class AddExpenseDialogComponent implements OnInit{
  friends: Friend[] = [];

  expense = new FormGroup({
    funder: new FormControl('', Validators.required),
    shareholder: new FormControl('', Validators.required),
    amount: new FormControl(null, Validators.required),
    description: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<AddExpenseDialogComponent>, private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.friendsService.friends.subscribe(
      friends => this.friends = friends);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  disableButton(): boolean {
    if (
      this.funder?.hasError('required') || 
      this.shareholder?.hasError('required') || 
      this.amount?.hasError('required'))
      {
        console.log('something went wrong.');
        return false;
      }
      return true;
  }

  callingFunction() {
    console.log(this.expense.value);
   }

  get funder() { 
    return this.expense.get('funder'); 
  }
  
  get shareholder() { 
    return this.expense.get('shareholder'); 
  }

  get amount() { 
    return this.expense.get('amount'); 
  }

  get description() {
    return this.expense.get('description');
  }
}
