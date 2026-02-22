import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoGame } from './video-game/video-game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('apprendre-typescript2');

  private videogame = new VideoGame("VideoGame test!");

  constructor() {

    this.title = signal('apprendre-typescript2 ... ' + this.videogame.label);
  }
  //videogame.label = "tests";


}
