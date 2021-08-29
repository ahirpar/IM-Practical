import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  usersDB: any;

  constructor() {
    this.usersDB = [
      {
        userid: "abc@media.com", password: "abc123", "username": "tom"
      },
      {
        userid: "def@media.com", password: "def123", username: "dick"
      },
      {
        userid: "ghi@media.com", password: "ghi123", username: "mob"
      },
      {
        userid: "jkl@media.com", password: "jkl123", username: "Jkl"
      },
      {
        userid: "jkl1@media.com", password: "123", username: "ashish"
      },
      {
        userid: "ashish@moontechnolabs.com", password: "joker", username: "ashish1"
      }
    ];
  }

  get() {
    return this.usersDB;
  }
  check_user(user_email: any, password: any) {

    let getUser = this.search(user_email, password);
    return getUser;
  }

  search(UserEmail: any, password: any) {
    for (let i = 0; i < this.usersDB.length; i++) {
      if ((this.usersDB[i].userid === UserEmail || this.usersDB[i].username === UserEmail) && this.usersDB[i].password == password) {
        return this.usersDB[i];
      }
    }
  }
}
