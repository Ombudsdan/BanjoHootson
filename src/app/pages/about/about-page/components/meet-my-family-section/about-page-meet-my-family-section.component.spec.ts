import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageMeetMyFamilySectionComponent } from './about-page-meet-my-family-section.component';

describe('AboutPageMeetMyFamilyComponent', () => {
  let component: AboutPageMeetMyFamilySectionComponent;
  let fixture: ComponentFixture<AboutPageMeetMyFamilySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageMeetMyFamilySectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPageMeetMyFamilySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
