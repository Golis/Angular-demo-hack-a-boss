import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeperDirectivesComponent } from './deeper-directives.component';

describe('DeeperDirectivesComponent', () => {
  let component: DeeperDirectivesComponent;
  let fixture: ComponentFixture<DeeperDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeeperDirectivesComponent]
    });
    fixture = TestBed.createComponent(DeeperDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
