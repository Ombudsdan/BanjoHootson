import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageWelcomeSectionComponent } from './welcome-section.component';

describe('WelcomeSectionComponent', () => {
  let component: AboutPageWelcomeSectionComponent;
  let fixture: ComponentFixture<AboutPageWelcomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageWelcomeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPageWelcomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
