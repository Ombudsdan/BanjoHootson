import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageSocialLinksSectionComponent } from './social-links-section.component';

describe('SocialLinksSectionComponent', () => {
  let component: AboutPageSocialLinksSectionComponent;
  let fixture: ComponentFixture<AboutPageSocialLinksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageSocialLinksSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPageSocialLinksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
