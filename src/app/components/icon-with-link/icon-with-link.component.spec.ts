import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWithLinkComponent } from './icon-with-link.component';

describe('IconWithLinkComponent', () => {
  let component: IconWithLinkComponent;
  let fixture: ComponentFixture<IconWithLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconWithLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconWithLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
