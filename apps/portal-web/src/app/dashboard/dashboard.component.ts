import { Component, OnInit } from '@angular/core';
import { AuthService } from '@nxspace/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'ij-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private auth: AuthService, private router:Router) {}

  ngOnInit() {}

  doLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
