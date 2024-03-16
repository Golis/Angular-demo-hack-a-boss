import {
    Injectable
  } from '@angular/core';
  import { of } from 'rxjs';
  import { delay } from 'rxjs/operators';
  
  
  ////////// The App: Services and Components for the tests. //////////////
  
  export interface Hero {
    name: string;
  }
  
  ////////// Services ///////////////
  @Injectable()
  export class ValueService {
    value = 'real value';
  
    getValue() {
      return this.value;
    }
    setValue(value: string) {
      this.value = value;
    }
  
    getObservableValue() {
      return of('observable value');
    }
  
    getPromiseValue() {
      return Promise.resolve('promise value');
    }
  
    getObservableDelayValue() {
      return of('observable delay value').pipe(delay(10));
    }
  }
  
  @Injectable()
  export class MasterService {
    constructor(private valueService: ValueService) {}
    getValue() {
      return this.valueService.getValue();
    }
  }
  
  