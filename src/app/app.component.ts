import { Component } from '@angular/core';

import { User } from './user/user';

import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Cryptofolio';

}
