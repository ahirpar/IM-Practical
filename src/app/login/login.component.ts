import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageForm: any = FormGroup;
  error = "";
  constructor(
    private fb: FormBuilder,
    private users: UserDataService,
    private myRoute: Router) {
    this.messageForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

  }

  ngOnInit(): void {

  }
  submit() {
    if (this.messageForm.valid) {
      this.error = "";
      let emailUserVal = this.messageForm.controls.email.value;
      let Passval = this.messageForm.controls.password.value;

      let checkuser = this.users.check_user(emailUserVal, Passval);
      if (checkuser) {
        localStorage.setItem('loggedEmail', checkuser.userid);
        this.myRoute.navigateByUrl('/');
      } else {
        this.error = "Email/Username or password invalid.";
      }
    } else {

    }
  }



}
