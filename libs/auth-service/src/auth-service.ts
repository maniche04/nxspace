import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  public token: string;
  public header: HttpHeaders;
  public clientinfo = {
    grant_type: 'password',
    client_id: 4,
    client_secret: 'OCVpd19IHXN5KpAYwDmCXrqzzr7mlGhfDqa6dXyu',
    username: '',
    password: '',
    scope: '*'
  };

  public httpOptions;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    const headers = new HttpHeaders();
    this.header = headers.append('Content-Type', 'application/json');
  }

  login(username: string, password: string): Observable<boolean> {
    // this.store.select('tasks').subscribe(data => this.tasks$ = data.task_list);
    // this.http.post('http://localhost:8000/oauth/token', formdata, httpOptions).subscribe(data => {
    //   console.log(data);
    // });
    this.clientinfo.username = username;
    this.clientinfo.password = password;

    return this.http
      .post('http://localhost:8000/oauth/token', this.clientinfo, {
        headers: this.header
      })
      .map(res => {
        const token = res['access_token'];
        if (token) {
          localStorage.setItem('access_token', token);
          localStorage.setItem('username', this.clientinfo.username);
          return true;
        }
        return false;
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
  }
}
