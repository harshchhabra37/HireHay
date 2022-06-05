import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageModuleComponent } from './landing-page-module.component';

describe('LandingPageModuleComponent', () => {
  let component: LandingPageModuleComponent;
  let fixture: ComponentFixture<LandingPageModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
