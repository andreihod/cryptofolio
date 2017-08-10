import { GlobalEventsManager } from './../_shared/global-events-manager.service';
import { AuthenticationService } from './authentication.service';
import { OnInit } from "@angular/core";
import { UserService } from "./../user/user.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"]
})
export class AuthenticationComponent implements OnInit {
  myUsername: string;
  showNavBar = false;

  ngOnInit() {
    this.getMe();
  }

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private globalEventsManager: GlobalEventsManager
  ) {
    this.globalEventsManager.showNavBarEmitter.subscribe(mode => {
      if (mode !== null) {
        this.showNavBar = mode;
        if (mode == true) {
          this.getMe();
        }
      }
    });

    if (this.authenticationService.isUsuarioAutenticado()) {
      this.showNavBar = true;
    }
  }

  getMe() {
    if (this.authenticationService.isUsuarioAutenticado()) {
      this.userService
        .get()
        .subscribe(result => (this.myUsername = result.json().user.username));
    }
  }

  logout() {
    this.authenticationService.logout();
    this.myUsername = null;
  }
}
