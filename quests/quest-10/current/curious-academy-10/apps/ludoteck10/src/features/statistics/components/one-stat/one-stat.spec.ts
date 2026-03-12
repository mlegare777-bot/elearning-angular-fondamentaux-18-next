import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStat } from './one-stat';

describe('OneStat', () => {
  let component: OneStat;
  let fixture: ComponentFixture<OneStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneStat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneStat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
