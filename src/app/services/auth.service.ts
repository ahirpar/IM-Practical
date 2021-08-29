import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor() { }


  getUser() {
    return localStorage.getItem('loggedEmail');
  }

  getLoggedEmail() {
    return localStorage.getItem('loggedEmail');
  }

  isLoggednIn() {
    return this.getLoggedEmail() !== null;
  }

  logout() {
    localStorage.removeItem('loggedEmail');
  }
}
