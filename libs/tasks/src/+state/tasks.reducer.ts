import { Tasks } from './tasks.interfaces';
import { TasksAction } from './tasks.actions';

export function tasksReducer(state: Tasks, action: TasksAction): Tasks {
  switch (action.type) {
    case 'TASKS_DATA_LOADED': {
      return { task_list: action.payload };
    }

    default: {
      return state;
    }
  }
}
