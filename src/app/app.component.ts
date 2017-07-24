import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myUsername: string;
  title = 'assts';
  description = 'A free and open source digital asset tracker.';

  constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

  getMe() {
    this.userService.get().subscribe(
      result => this.myUsername = result.json().user.username
    )
  }

  logout() {
    this.authenticationService.logout();
    this.myUsername = null;
  }

}
