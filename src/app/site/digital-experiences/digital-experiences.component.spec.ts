import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalExperiencesComponent } from './digital-experiences.component';

describe('DigitalExperiencesComponent', () => {
  let component: DigitalExperiencesComponent;
  let fixture: ComponentFixture<DigitalExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalExperiencesComponent]
    });
    fixture = TestBed.createComponent(DigitalExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
