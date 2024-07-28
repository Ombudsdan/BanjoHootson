/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectSectionComponent } from './connect-section.component';

describe('HomePageConnectSectionComponent', () => {
  let component: ConnectSectionComponent;
  let fixture: ComponentFixture<ConnectSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
