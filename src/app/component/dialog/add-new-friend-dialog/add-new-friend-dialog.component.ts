import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-add-new-friend-dialog',
  templateUrl: './add-new-friend-dialog.component.html',
  styleUrls: ['./add-new-friend-dialog.component.scss']
})
export class AddNewFriendDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddNewFriendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
