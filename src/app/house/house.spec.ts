import { ComponentFixture, TestBed } from '@angular/core/testing';

import { house } from './house';

describe('house', () => {
  let component: house;
  let fixture: ComponentFixture<house>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [house]
    })
    .compileComponents();

    fixture = TestBed.createComponent(house);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
