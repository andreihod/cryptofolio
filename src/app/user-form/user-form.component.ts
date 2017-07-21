import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();
  repeatPassword: string;
  creating: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (this.creating) {
      if (this.user.password !== this.repeatPassword) {

      }

      this.userService.signup(this.user).subscribe(
        result => console.log(result)
      );

    } else {
      this.userService.login(this.user).subscribe(
        result => console.log(result),
        error => console.log(error)
      )
    }
  }

  create() {
    this.creating = !this.creating;
  }
  
  getMe(){
    this.userService.get().subscribe(
      result => console.log(result)
    )
  }

}
