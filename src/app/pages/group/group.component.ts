import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { GroupDialogComponent } from '../../component/group-dialog/group-dialog.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  name: string | undefined;
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(GroupDialogComponent, {
      width: '15rem',
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
  ngOnInit(): void {
  }

}
