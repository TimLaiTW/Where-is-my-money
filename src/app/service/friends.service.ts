import { Injectable } from '@angular/core';
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
  
  addFriend(name: string){
    const temp: Friend[] = this.group.getValue();
    temp.push({
      id: this.id++,
      name: name,
      amount: 0
    });
    this.group.next(temp);
  }

  editName(id: number, name: string){
    const temp: Friend[] = this.group.getValue();
    temp[id].name = name;
    this.group.next(temp);
  }
}
