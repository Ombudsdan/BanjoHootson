/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageHeadingSectionComponent } from './home-page-heading-section.component';

describe('H1Component', () => {
  let component: HomePageHeadingSectionComponent;
  let fixture: ComponentFixture<HomePageHeadingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageHeadingSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageHeadingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
