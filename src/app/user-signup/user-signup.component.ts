import { AuthenticationService } from './../authentication.service';
import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  user: User = new User();
  repeatPassword: string;
  creating: boolean = false;

  constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (this.creating) {
      if (this.user.password !== this.repeatPassword) {

      }

      this.userService.signup(this.user).subscribe(
        result => {
          this.authenticationService.login(this.user.username, this.user.password).subscribe(
            rev => {
              console.log(rev)
            }
          )
        }
      );

    } else {
      let usernameEmail = (this.user.username) ? this.user.username : this.user.email;
      this.authenticationService.login(usernameEmail, this.user.password).subscribe(
        result => console.log(result)
      )
    }
  }

  login() {

  }

  signup() {

  }

  create() {
    this.creating = !this.creating;
  }

  getMe() {
    this.userService.get().subscribe(
      result => console.log(result)
    )
  }

  logout() {
    this.authenticationService.logout();
  }

}
