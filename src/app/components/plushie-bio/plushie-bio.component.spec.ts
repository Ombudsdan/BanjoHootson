import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlushieBioComponent } from './plushie-bio.component';

describe('PlushieBioComponent', () => {
  let component: PlushieBioComponent;
  let fixture: ComponentFixture<PlushieBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlushieBioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlushieBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
