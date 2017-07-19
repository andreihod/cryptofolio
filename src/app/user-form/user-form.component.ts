import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user : User = new User();
  repeatPassword : string;
  creating: boolean = false;

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.user.username = this.user.email;
    
    if(this.creating){
      if(this.user.password === this.repeatPassword){
        this.userService.signup(this.user).subscribe(
          value => console.log(value)
        )
      }
    }
  }

  create(){
    this.creating = !this.creating;
  }

}
