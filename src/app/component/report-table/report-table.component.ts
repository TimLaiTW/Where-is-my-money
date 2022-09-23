import { Component, OnInit } from '@angular/core';
import { Friend } from '../../type';
import { FriendsService } from '../../service/friends.service';
import { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit{

  displayedColumns: string[] = ['name', 'balance'];
  dataSource = new MatTableDataSource<Friend>([]);

  constructor(private friendsService: FriendsService){}

  ngOnInit(): void {
    this.friendsService.friends.subscribe(
      friends => {
        this.dataSource.data = friends;
      });
  }
}





