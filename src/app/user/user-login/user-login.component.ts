import { Component, OnInit } from '@angular/core';

import { User } from './../user';

import { AuthenticationService } from './../../authentication/authentication.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  error : string;

  constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login(form) {
    this.error = null;

    let usernameEmail = (this.user.username) ? this.user.username : this.user.email;
    this.authenticationService.login(usernameEmail, this.user.password).subscribe(
      result => '',
      error => this.error = error
    )
  }

}
