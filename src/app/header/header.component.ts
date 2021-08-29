import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentroute: string = '';
  login_status = this.auth.isLoggednIn();
  constructor(
    private myRoute: Router,
    private auth: AuthService) {
    this.currentroute = this.myRoute.url.substr(
      this.myRoute.url.indexOf('/') + 1
    );
  }

  ngOnInit(): void {

  }
  openLink(path: any): void {
    if (this.currentroute != path) {
      this.myRoute.navigateByUrl(path);
    }
  }
  logout(): void {
    this.auth.logout();
    this.login_status = this.auth.isLoggednIn();
    this.myRoute.navigateByUrl('/');
  }

}
