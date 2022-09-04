import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Friend } from '../type';
import { getIndexFromArrayById } from '../constants';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  id: number = 0;
  private friendsSubject = new BehaviorSubject<Friend[]>([]);
  friends = this.friendsSubject.asObservable();
  
  addFriend(name: string): void {
    const friendsList: Friend[] = this.friendsSubject.getValue();
    friendsList.push({
      uuid: uuidv4(),
      name: name,
      amount: 0
    });
    this.friendsSubject.next(friendsList);
  }

  removeFriend(id: string): void {
    const friendsList: Friend[] = this.friendsSubject.getValue();
    const index = getIndexFromArrayById(friendsList, id);
    friendsList.splice(index, 1);
    this.friendsSubject.next(friendsList);
  }

  editName(id: string, name: string): void {
    const friendsList: Friend[] = this.friendsSubject.getValue();
    const index = getIndexFromArrayById(friendsList, id);
    friendsList[index].name = name;
    this.friendsSubject.next(friendsList);
  }
}
