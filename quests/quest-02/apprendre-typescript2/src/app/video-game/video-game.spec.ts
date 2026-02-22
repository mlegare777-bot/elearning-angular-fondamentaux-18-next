import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGame } from './video-game';

describe('VideoGame', () => {
  let component: VideoGame;
  let fixture: ComponentFixture<VideoGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
