import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { tasksReducer } from './+state/tasks.reducer';
import { tasksInitialState } from './+state/tasks.init';
import { TasksEffects } from './+state/tasks.effects';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksService } from './tasks.service';
import { MaterialLibModule } from '@nxspace/material-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

export const tasksRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forFeature('tasks', tasksReducer, { initialState: tasksInitialState }),
    EffectsModule.forFeature([TasksEffects]),
    MaterialLibModule
  ],
  providers: [TasksEffects, TasksService],
  declarations: [TasksListComponent],
  exports: [TasksListComponent]
})
export class TasksModule {}
