import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGames } from './video-games';

describe('VideoGames', () => {
  let component: VideoGames;
  let fixture: ComponentFixture<VideoGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
