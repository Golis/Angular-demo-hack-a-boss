import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  welcome = '';
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn
      ? 'Welcome, ' + this.userService.user.name
      : 'Please log in.';
  }

}
