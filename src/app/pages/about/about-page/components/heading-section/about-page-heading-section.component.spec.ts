import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageHeadingSectionComponent } from './about-page-heading-section.component';

describe('HeadingSectionComponent', () => {
  let component: AboutPageHeadingSectionComponent;
  let fixture: ComponentFixture<AboutPageHeadingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageHeadingSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPageHeadingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
