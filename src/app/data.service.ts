import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  // This would be the data grabbed by the server so make a call to retrieve data
  // Then create a RxJS BehaviorSubject that wraps and handles data nicely
  // for us to use and modify before returning to database
  private products = new BehaviorSubject<any>([
    {name: 'Test', value: 1},
    {name: 'Test 2', value: 2},
    {name: 'Test 3', value: 3}
    ]);
  goal = this.goals.asObservable();
  product = this.products.asObservable();

  constructor() {
  }

  changeGoal(goal) {
    this.goals.next(goal);
  }

  updateProduct(product) {
    this.products.next(product);
  }
}
