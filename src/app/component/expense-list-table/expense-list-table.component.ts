import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { ExpenseService } from 'src/app/service/expense.service';
import { Friend, Expense, ExpenseData } from 'src/app/type'; 
import { MatTableDataSource} from '@angular/material/table';
import { getStringFromArray } from 'src/app/constants';

@Component({
  selector: 'app-expense-list-table',
  templateUrl: './expense-list-table.component.html',
  styleUrls: ['./expense-list-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpenseListTableComponent implements OnInit{
  dataSource = new MatTableDataSource<Expense>([]);
  constructor(private expenseService: ExpenseService){}

  ngOnInit(): void {
    this.expenseService.expenses.subscribe(
      expenses => this.dataSource.data = expenses);
  }

  columnsToDisplay = ['Paid by', 'Share with', 'Amount'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: ExpenseData | null = null;

  getStringFromFriends(friends: Friend[]): string{
    const friendsName: string[] = friends.map(friend => friend.name);
    return getStringFromArray(friendsName);
  }
}