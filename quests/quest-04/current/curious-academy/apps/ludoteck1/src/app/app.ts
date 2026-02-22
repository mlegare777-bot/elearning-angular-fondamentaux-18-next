import { Component } from '@angular/core';
import { ListVideoGames } from "../features/video-games/components/list-video-games/list-video-games";

@Component({
  imports: [ListVideoGames],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ludoteck1';
}
