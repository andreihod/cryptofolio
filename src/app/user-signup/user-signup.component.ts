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

  constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  signup(form) {
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
  }


}
