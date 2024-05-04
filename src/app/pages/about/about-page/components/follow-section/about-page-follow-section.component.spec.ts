import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageFollowSectionComponent } from './about-page-follow-section.component';

describe('AboutPageFollowSectionComponent', () => {
  let component: AboutPageFollowSectionComponent;
  let fixture: ComponentFixture<AboutPageFollowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageFollowSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPageFollowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
