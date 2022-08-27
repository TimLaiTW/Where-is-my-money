import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../../type';

@Component({
  selector: 'app-group-list-card',
  templateUrl: './group-list-card.component.html',
  styleUrls: ['./group-list-card.component.scss']
})
export class GroupListCardComponent implements OnInit {
  @Input() friend!: Friend;
  constructor() { }

  ngOnInit(): void {
  }
}
