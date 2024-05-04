/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageIntroductionSectionComponent } from './home-page-introduction-section.component';

describe('IntroductionSectionComponent', () => {
  let component: HomePageIntroductionSectionComponent;
  let fixture: ComponentFixture<HomePageIntroductionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageIntroductionSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageIntroductionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
