import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrl: './username.component.sass'
})
export class UsernameComponent {
  // Username variable
  username = '';
  usernameInputValue = '';
  // On button click h3 will fill with input value
  onUpdateUsername() {
    this.username = this.usernameInputValue;
  }

  getUsernameInputValue(event) {
    this.usernameInputValue = event.target.value;
  }
}
