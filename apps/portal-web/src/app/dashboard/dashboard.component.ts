import { Component, OnInit } from '@angular/core';
import { AuthService } from '@nxspace/auth-service';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ij-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  doLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
