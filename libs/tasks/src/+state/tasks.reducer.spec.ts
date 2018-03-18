import { tasksReducer } from './tasks.reducer';
import { tasksInitialState } from './tasks.init';
import { Tasks } from './tasks.interfaces';
import { DataLoaded } from './tasks.actions';

describe('tasksReducer', () => {
  it('should work', () => {
    const state: Tasks = { task_list: [] };
    const action: DataLoaded = { type: 'TASKS_DATA_LOADED', payload: {} };
    const actual = tasksReducer(state, action);
    expect(actual).toEqual({});
  });
});
