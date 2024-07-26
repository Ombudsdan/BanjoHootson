import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSocialLinksSectionComponent } from './home-page-social-links-section.component';

describe('HomePageSocialLinksSectionComponent', () => {
  let component: HomePageSocialLinksSectionComponent;
  let fixture: ComponentFixture<HomePageSocialLinksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageSocialLinksSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageSocialLinksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
