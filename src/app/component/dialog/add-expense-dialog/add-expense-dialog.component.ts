import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
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

  funderControl = new FormControl(null, Validators.required);
  shareholderControl = new FormControl(null, Validators.required);

  constructor(public dialogRef: MatDialogRef<AddExpenseDialogComponent>, private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.friendsService.friends.subscribe(
      friends => this.friends = friends);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
