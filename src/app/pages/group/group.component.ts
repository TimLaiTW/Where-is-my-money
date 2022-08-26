import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { AddNewFriendDialogComponent } from '../../component/dialog/add-new-friend-dialog/add-new-friend-dialog.component';
import { FriendsService } from '../../service/friends.service';
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

  constructor(public dialog: MatDialog, private friendsService: FriendsService) {}

  openGroupDialog(): void {
    const dialogRef = this.dialog.open(AddNewFriendDialogComponent, {
      width: '15rem',
      data: {name: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return;
      }
      
      this.friendsService.addFriend(result);
    });
  }

  ngOnInit(): void {
    this.friendsService.friends.subscribe(
      friends => this.friends = friends);
  }

  openFriendDialog(id: number){
    // TODO: dialog for editing name 
    this.friendsService.editName(id, 'ayy');
  }
}
