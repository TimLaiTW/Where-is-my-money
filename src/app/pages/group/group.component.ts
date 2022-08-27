import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewFriendDialogComponent } from '../../component/dialog/add-new-friend-dialog/add-new-friend-dialog.component';
import { EditFriendDialogComponent } from '../../component/dialog/edit-friend-dialog/edit-friend-dialog.component';
import { FriendsService } from '../../service/friends.service';
import { Friend } from '../../type';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  friends: Friend[] = [];

  constructor(public dialog: MatDialog, private friendsService: FriendsService) {}

  openAddNewFriendDialog(): void {
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

  openEditFriendDialog(friend: Friend): void {
    const dialogRef = this.dialog.open(EditFriendDialogComponent, {
      width: '15rem',
      data: {name: friend.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return;
      }
      
      this.friendsService.editName(friend.id, result);
    });
  }

  ngOnInit(): void {
    this.friendsService.friends.subscribe(
      friends => this.friends = friends);
  }
}
