import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FriendData } from '../../../type';

@Component({
  selector: 'app-edit-friend-dialog',
  templateUrl: './edit-friend-dialog.component.html',
  styleUrls: ['./edit-friend-dialog.component.scss']
})
export class EditFriendDialogComponent {
  name: string = '';
  constructor(
    public dialogRef: MatDialogRef<EditFriendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public friend: FriendData,
  ) {
    this.name = friend.name;
  }

  onAction(event: string): void {
    this.dialogRef.close({event});
  }; 
}
