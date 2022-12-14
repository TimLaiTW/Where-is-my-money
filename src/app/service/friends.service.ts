import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Friend } from '../type';
import { getIndexFromArrayById, getRandomHeadData } from '../share';
import { v4 as uuidv4 } from 'uuid';
import { FakeFriendA, FakeFriendB } from '../template-for-test';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  id: number = 0;

  private friendsSubject = new BehaviorSubject<Friend[]>([FakeFriendA, FakeFriendB]);
  // private friendsSubject = new BehaviorSubject<Friend[]>([]);
  
  friends = this.friendsSubject.asObservable();
  
  addFriend(name: string): void {
    const friendsList: Friend[] = this.friendsSubject.getValue();
    friendsList.push({
      uuid: uuidv4(),
      name: name,
      balance: 0,
      icon: getRandomHeadData()
    });
    this.friendsSubject.next(friendsList);
  }

  removeFriend(id: string): void {
    const friendsList: Friend[] = this.friendsSubject.getValue();
    const index = getIndexFromArrayById(friendsList, id);
    friendsList.splice(index, 1);
    this.friendsSubject.next(friendsList);
  }

  editFriend(friend: Friend): void {
    const friendsList: Friend[] = this.friendsSubject.getValue();
    const index = getIndexFromArrayById(friendsList, friend.uuid);
    friendsList[index].name = friend.name;
    this.friendsSubject.next(friendsList);
  }

  resetBalance(): void {
    const friendsList: Friend[] = this.friendsSubject.getValue();
    friendsList.forEach(friend => friend.balance = 0);
    this.friendsSubject.next(friendsList);
  }
}
