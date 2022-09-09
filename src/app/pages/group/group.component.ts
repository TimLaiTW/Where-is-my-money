import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FriendsService } from '../../service/friends.service';
import { Friend, FriendAction } from '../../type';

import { ModuleFriendDialogComponent } from '../../component/dialog/module-friend-dialog/module-friend-dialog.component';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  friends: Friend[] = [];

  constructor(public dialog: MatDialog, private friendsService: FriendsService) {}

  openAddNewFriendDialog(): void {
    const dialogRef = this.dialog.open(ModuleFriendDialogComponent, {
      width: '15rem',
      data: {
        action: FriendAction.ADDFRIEND,
        title: 'Enter friend\'s name',
        name: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result || result.event === 'Cancel'){
        return;
      }
      else if (result.event === 'Save') {
        this.friendsService.addFriend(result.data.name);
      }
    });
  }

  openEditFriendDialog(friend: Friend): void {
    const dialogRef = this.dialog.open(ModuleFriendDialogComponent, {
      width: '15rem',
      data: {
        action: FriendAction.EDITFRIEND,
        title: 'Enter friend\'s name',
        name: friend.name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result || result.event === 'Cancel'){
        return;
      }
      else if (result.event === 'Save') {
        this.friendsService.editName(friend.uuid, result.data.name);
      }
      else if (result.event === 'Remove'){
        this.friendsService.removeFriend(friend.uuid);
      }
    });
  }

  ngOnInit(): void {
    this.friendsService.friends.subscribe(
      friends => this.friends = friends);
  }
}
