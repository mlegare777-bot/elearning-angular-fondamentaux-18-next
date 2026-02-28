import { Component } from '@angular/core';
import { ListVideoGames } from '../features/video-games/video-games';
import { MatSliderModule } from '@angular/material/slider';


@Component({
  imports: [ListVideoGames, MatSliderModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ludoteck8';


  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + '000';
    }

    return `${value}`;
  }

}
