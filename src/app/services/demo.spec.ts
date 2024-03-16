import { MasterService, ValueService } from './demo';

///////// Fakes /////////
export class FakeValueService extends ValueService {
  override value = 'faked service value';
}
////////////////////////
describe('demo (no TestBed):', () => {
  // Straight Jasmine testing without Angular's testing support
  describe('ValueService', () => {
    let service: ValueService;
    beforeEach(() => {
      service = new ValueService();
    });

    it('#getValue should return real value', () => {
      expect(service.getValue()).toBe('real value');
    });

    it('#getObservableValue should return value from observable', (done: DoneFn) => {
      service.getObservableValue().subscribe((value) => {
        expect(value).toBe('observable value');
        done();
      });
    });

    it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
      service.getPromiseValue().then((value) => {
        expect(value).toBe('promise value');
        done();
      });
    });
  });

  // MasterService requires injection of a ValueService
  describe('MasterService without Angular testing support', () => {
    let masterService: MasterService;

    it('#getValue should return real value from the real service', () => {
      masterService = new MasterService(new ValueService());
      expect(masterService.getValue()).toBe('real value');
    });

    it('#getValue should return faked value from a fakeService', () => {
      masterService = new MasterService(new FakeValueService());
      expect(masterService.getValue()).toBe('faked service value');
    });

    it('#getValue should return faked value from a fake object', () => {
      const fake = { getValue: () => 'fake value' };
      masterService = new MasterService(fake as ValueService);
      expect(masterService.getValue()).toBe('fake value');
    });

    it('#getValue should return stubbed value from a spy', () => {
      // create `getValue` spy on an object representing the ValueService
      const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);

      // set the value to return when the `getValue` spy is called.
      const stubValue = 'stub value';
      valueServiceSpy.getValue.and.returnValue(stubValue);

      masterService = new MasterService(valueServiceSpy);

      expect(masterService.getValue()).withContext('service returned stub value').toBe(stubValue);
      expect(valueServiceSpy.getValue.calls.count())
        .withContext('spy method was called once')
        .toBe(1);
      expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
    });
  });
});


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/