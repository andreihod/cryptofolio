import { AuthenticationService } from './../authentication.service';
import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  repeatPassword: string;
  creating: boolean = false;

  constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login(form) {
    let usernameEmail = (this.user.username) ? this.user.username : this.user.email;
    this.authenticationService.login(usernameEmail, this.user.password).subscribe(
      result => console.log(result)
    )
  }

}
