import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FriendDialogData } from '../../../type';

@Component({
  selector: 'app-edit-friend-dialog',
  templateUrl: './edit-friend-dialog.component.html',
  styleUrls: ['./edit-friend-dialog.component.scss']
})
export class EditFriendDialogComponent {
  name: string = '';
  constructor(
    public dialogRef: MatDialogRef<EditFriendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FriendDialogData,
  ) {
    this.name = data.name;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}