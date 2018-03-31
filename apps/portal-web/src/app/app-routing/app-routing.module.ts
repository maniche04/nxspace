import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginlayoutComponent } from '../loginlayout/loginlayout.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from './../about/about.component';
import { ProductsComponent } from './../products/products.component';
import { AuthGuard } from './../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      }
    ]
  },
  {
    path: '',
    component: LoginlayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
