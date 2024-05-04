/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeIntroductionSectionComponent } from './home-introduction-section.component';

describe('IntroductionSectionComponent', () => {
  let component: HomeIntroductionSectionComponent;
  let fixture: ComponentFixture<HomeIntroductionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIntroductionSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIntroductionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
