import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["dispaly"]);
    } else {
      alert("Invalid credentials");
    }
  }

}
