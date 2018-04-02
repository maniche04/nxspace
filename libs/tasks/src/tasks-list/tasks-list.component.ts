import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TasksState } from './../+state/tasks.interfaces';
import { TasksAction } from './../+state/tasks.actions';
import { Observable } from 'rxjs/Observable';
import { Tasks } from '../+state/tasks.interfaces';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from '@nxspace/auth-service';

@Component({
  selector: 'ij-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  public tasks$: any;
  constructor(private store: Store<TasksState>, private http: HttpClient, private auth: AuthService) {}

  ngOnInit() {
    this.store.dispatch({ type: 'TASKS_LOAD_DATA' });
    this.tasks$ = this.store.select(data => data.tasks.task_list);
    // this.auth.login("manish@jizanperfumes.com","Almunia@$").subscribe();
  }
}
