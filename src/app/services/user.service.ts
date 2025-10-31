import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/interfaces.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    initials: 'JD'
  });
  
  public user$ = this.userSubject.asObservable();

  getCurrentUser(): User {
    return this.userSubject.value;
  }

  setUser(user: User): void {
    const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
    this.userSubject.next({ ...user, initials });
  }
}

