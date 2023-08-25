import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomersLoveUsComponent } from './cutomers-love-us.component';

describe('CutomersLoveUsComponent', () => {
  let component: CutomersLoveUsComponent;
  let fixture: ComponentFixture<CutomersLoveUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CutomersLoveUsComponent]
    });
    fixture = TestBed.createComponent(CutomersLoveUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
