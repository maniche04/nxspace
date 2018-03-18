import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { TasksState } from './tasks.interfaces';
import { LoadData, DataLoaded } from './tasks.actions';
import { TasksService } from '../tasks.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksEffects {
  @Effect()
  loadData = this.dataPersistence.fetch('TASKS_LOAD_DATA', {
    run: (action: LoadData, state: TasksState) => {
      return this.backend.dummy().map(r => ({
        type: 'TASKS_DATA_LOADED',
        payload: r
      }));
    },

    onError: (action: LoadData, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<TasksState>,
    private backend: TasksService
  ) {}
}
