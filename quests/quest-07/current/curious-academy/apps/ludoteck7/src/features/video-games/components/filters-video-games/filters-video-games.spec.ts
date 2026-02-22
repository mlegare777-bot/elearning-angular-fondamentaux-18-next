import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersVideoGames } from './filters-video-games';

describe('FiltersVideoGames', () => {
  let component: FiltersVideoGames;
  let fixture: ComponentFixture<FiltersVideoGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersVideoGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersVideoGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
