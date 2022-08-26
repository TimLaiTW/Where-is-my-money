import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { friend } from '../type';

@Injectable({
  providedIn: 'root'
})
export class GroupServiceService {
  // TODO: Do I really need id ?
  id: number = 0;
  private group = new BehaviorSubject<friend[]>([]);
  friends = this.group.asObservable();
  
  addFriend(name: string){
    const temp: friend[] = this.group.getValue();
    temp.push({
      id: this.id++,
      name: name,
      amount: 0
    });
    this.group.next(temp);
  }

  editName(id: number, name: string){
    const temp: friend[] = this.group.getValue();
    temp[id].name = name;
    this.group.next(temp);
  }
}
