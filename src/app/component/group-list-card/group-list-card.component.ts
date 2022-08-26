import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-list-card',
  templateUrl: './group-list-card.component.html',
  styleUrls: ['./group-list-card.component.scss']
})
export class GroupListCardComponent implements OnInit {
  @Input() friend?: string;
  constructor() { }

  ngOnInit(): void {
  }
}
