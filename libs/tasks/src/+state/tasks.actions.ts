export interface LoadData {
  type: 'TASKS_LOAD_DATA';
  payload: {};
}

export interface DataLoaded {
  type: 'TASKS_DATA_LOADED';
  payload: {};
}

export interface TaskAdded {
  type: 'TASKS_ADD_TASK';
  payload: {};
}

export type TasksAction = LoadData | DataLoaded;
