import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-video-game',
  imports: [],
  templateUrl: './video-game.html',
  styleUrl: './video-game.css',
})
export class VideoGame {
  @Inject('label') _label: string = "";

  constructor(@Inject('label') label: string) {
    this._label = label;
  }


  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }
}
