import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Friend } from '../type';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  // TODO: Do I really need id ?
  id: number = 0;
  private group = new BehaviorSubject<Friend[]>([]);
  friends = this.group.asObservable();
  
  addFriend(name: string) {
    const temp: Friend[] = this.group.getValue();
    temp.push({
      id: this.id++,
      name: name,
      amount: 0
    });
    this.group.next(temp);
  }

  removeFriend(id: number) {
    const temp: Friend[] = this.group.getValue();
    const indexOfDeletedObj = temp.map(friend => friend.id).indexOf(id);
    temp.splice(indexOfDeletedObj, 1);
    this.group.next(temp);
  }

  editName(id: number, name: string) {
    const temp: Friend[] = this.group.getValue();
    temp[id].name = name;
    this.group.next(temp);
  }
}
