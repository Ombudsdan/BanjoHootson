/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeadingSectionComponent } from './home-heading-section.component';

describe('H1Component', () => {
  let component: HomeHeadingSectionComponent;
  let fixture: ComponentFixture<HomeHeadingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHeadingSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeadingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
