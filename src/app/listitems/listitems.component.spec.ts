import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemsComponent } from './listitems.component';

describe('ListitemsComponent', () => {
  let component: ListitemsComponent;
  let fixture: ComponentFixture<ListitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListitemsComponent]
    });
    fixture = TestBed.createComponent(ListitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
