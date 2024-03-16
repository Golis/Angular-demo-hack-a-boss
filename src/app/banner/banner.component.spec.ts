import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent (with beforeEach)', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      declarations: [BannerComponent], 
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]});
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should contain "banner works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('banner works!');
  });

  it('should have <p> with "banner works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('p')!;
    expect(p.textContent).toEqual('banner works!');
  });


  it('should display original title', () => {
    expect(h1.textContent).toContain(component.title);
  });

});