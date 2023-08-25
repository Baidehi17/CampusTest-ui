import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalFutuerComponent } from './digital-futuer.component';

describe('DigitalFutuerComponent', () => {
  let component: DigitalFutuerComponent;
  let fixture: ComponentFixture<DigitalFutuerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalFutuerComponent]
    });
    fixture = TestBed.createComponent(DigitalFutuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
