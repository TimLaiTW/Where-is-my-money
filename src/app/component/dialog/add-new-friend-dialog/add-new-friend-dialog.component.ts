import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-friend-dialog',
  templateUrl: './add-new-friend-dialog.component.html',
  styleUrls: ['./add-new-friend-dialog.component.scss']
})
export class AddNewFriendDialogComponent {
  friendName: string = '';
  constructor(
    public dialogRef: MatDialogRef<AddNewFriendDialogComponent>,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
