import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartevComponent } from './cartev.component';

describe('CartevComponent', () => {
  let component: CartevComponent;
  let fixture: ComponentFixture<CartevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartevComponent]
    });
    fixture = TestBed.createComponent(CartevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
