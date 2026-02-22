import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGame2 } from './video-game2';

describe('VideoGame2', () => {
  let component: VideoGame2;
  let fixture: ComponentFixture<VideoGame2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGame2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGame2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
