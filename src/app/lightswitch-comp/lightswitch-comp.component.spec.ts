import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchCompComponent } from './lightswitch-comp.component';

describe('LightswitchCompComponent', () => {
  let component: LightswitchCompComponent;
  let fixture: ComponentFixture<LightswitchCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightswitchCompComponent]
    });
    fixture = TestBed.createComponent(LightswitchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    const comp = new LightswitchCompComponent();
    expect(comp.isOn).withContext('off at first').toBe(false);
    comp.clicked();
    expect(comp.isOn).withContext('on after click').toBe(true);
    comp.clicked();
    expect(comp.isOn).withContext('off after second click').toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new LightswitchCompComponent();
    expect(comp.message)
      .withContext('off at first')
      .toMatch(/is off/i);
    comp.clicked();
    expect(comp.message).withContext('on after clicked').toMatch(/is on/i);
  });
});
