import { Component, Input } from '@angular/core';
import { Friend, Action, ActionResponse, HeadLinkData } from '../../type';
import { ModuleFriendDialogComponent } from '../../component/dialog/module-friend-dialog/module-friend-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FriendsService } from '../../service/friends.service';
@Component({
  selector: 'app-group-list-card',
  templateUrl: './group-list-card.component.html',
  styleUrls: ['./group-list-card.component.scss']
})
export class GroupListCardComponent {
  @Input() friend!: Friend;
  constructor(public dialog: MatDialog, private friendsService: FriendsService) { }

  onEditEvent(response: ActionResponse) {
    if (response.action === Action.EDIT){
      this.openEditFriendDialog(this.friend);
    }
    else if (response.action === Action.REMOVE){
      this.friendsService.removeFriend(this.friend.uuid);
    }
  }

  openEditFriendDialog(friend: Friend): void {
    const dialogRef = this.dialog.open(ModuleFriendDialogComponent, {
      width: '15rem',
      data: {
        action: Action.EDIT,
        title: 'Edit ' + friend.name,
        name: friend.name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result || result.event === 'Cancel'){
        return;
      }
      else if (result.event === 'Save') {
        const res: Friend = {
          uuid: friend.uuid,
          name: result.data.name,
          amount: friend.amount,
          icon: friend.icon
        }
        this.friendsService.editFriend(res);
      }
      else if (result.event === 'Remove'){
        this.friendsService.removeFriend(friend.uuid);
      }
    });
  }

  getHeadIcon(iconData: HeadLinkData): string{
    return `https://img.icons8.com/color/48/000000/circled-user-${iconData.sex}-skin-type-${iconData.skin}--v1.png`
}
}
