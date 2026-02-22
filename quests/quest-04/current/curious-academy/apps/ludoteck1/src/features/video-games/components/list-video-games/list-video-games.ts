import { Component } from '@angular/core';
import { VideoGames } from './modele/video-game';

@Component({
  selector: 'app-list-video-games',
  imports: [],
  templateUrl: './list-video-games.html',
  styleUrl: './list-video-games.css',
})
export class ListVideoGames {
  list: VideoGames = [
    {
      label: 'StarCarft 2',
      year: 2012
    },
    {
      label: 'StarCarft 1',
      year: 1999
    }


  ];

  toRemoveOneElement(): void {
    this.list.pop();
  }

}
