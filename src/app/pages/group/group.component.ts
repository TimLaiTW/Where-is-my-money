import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { GroupDialogComponent } from '../../component/group-dialog/group-dialog.component';
import { GroupServiceService } from '../../service/group-service.service';
import { friend } from '../../type';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  friends?: friend[];

  constructor(public dialog: MatDialog, private groupService: GroupServiceService) {}

  openGroupDialog(): void {
    const dialogRef = this.dialog.open(GroupDialogComponent, {
      width: '15rem',
      data: {name: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return;
      }
      
      this.groupService.addFriend(result);
    });
  }

  ngOnInit(): void {
    this.groupService.friends.subscribe(
      friends => this.friends = friends);
  }

  openFriendDialog(id: number){
    // TODO: dialog for editing name 
    this.groupService.editName(id, 'ayy');
  }
}
