import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@nxspace/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'ij-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  authError = false;
  authProgress = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  doLogin() {
    this.authProgress = true;
    this.authError = false;
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      res => {
        if (res) {
          this.authError = false;
          this.router.navigate(['']);
        } else {
          this.authError = true;
        }
        this.authProgress = false;
      },
      error => {
        this.authError = true;
        this.authProgress = false;
      }
    );
  }
}
