import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { readAll, hot } from '@nrwl/nx/testing';
import { TasksEffects } from './tasks.effects';

describe('TasksEffects', () => {
  let actions;
  let effects: TasksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [TasksEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(TasksEffects);
  });

  describe('someEffect', () => {
    it(
      'should work',
      async(async () => {
        actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
        expect(await readAll(effects.loadData)).toEqual([{ type: 'DATA_LOADED', payload: {} }]);
      })
    );
  });
});
