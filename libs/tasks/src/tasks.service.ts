import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksService {
  items: Observable<any[]>;
  constructor(public db: AngularFirestore) {}

  public dummy(): Observable<any> {
    return this.db.collection('tasks').valueChanges();
  }
}
