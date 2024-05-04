/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageConnectSectionComponent } from './home-page-connect-section.component';

describe('HomePageConnectSectionComponent', () => {
  let component: HomePageConnectSectionComponent;
  let fixture: ComponentFixture<HomePageConnectSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageConnectSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageConnectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
