import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FriendDialog, Action } from '../../../type';

@Component({
  selector: 'app-module-friend-dialog',
  templateUrl: './module-friend-dialog.component.html',
  styleUrls: ['./module-friend-dialog.component.scss']
})
export class ModuleFriendDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ModuleFriendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FriendDialog 
    ) { }

    onAction(event: string): void {
      const response = {
        event,
        data: this.data
      }

      this.dialogRef.close(response);
    } 
}
