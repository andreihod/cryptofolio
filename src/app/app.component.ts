import { AuthenticationService } from './authentication.service';
import { UserService } from './user/user.service';
import { User } from './user/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'CryptoFolio';
  description = 'A free and open source digital asset tracker.';


}
