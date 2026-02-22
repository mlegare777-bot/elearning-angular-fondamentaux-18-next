import { Component } from '@angular/core';
import { VideoGame, VideoGames } from './modele/video-game';
import { TableVideoGames } from './components/table-video-games/table-video-games';
import { AddVideoGame } from './components/add-video-game/add-video-game';

@Component({
  selector: 'app-list-video-games',
  imports: [TableVideoGames, AddVideoGame],
  templateUrl: './video-games.html',
  styleUrl: './video-games.css',
})
export class ListVideoGames {
  //  listTitle = 'Voici la liste des video-games';
  list: VideoGames = [
    {
      id: 1,
      label: 'StarCarft 1',
      year: 1998
    },
    {
      id: 2,
      label: 'StarCarft 2',
      year: 2010
    },
    {
      id: 3,
      label: 'Diablo 1',
      year: 1997
    },
    {
      id: 4,
      label: 'Diablo 2',
      year: 2000
    },
    {
      id: 5,
      label: 'Diablo 3',
      year: 2012
    },
    {
      id: 6,
      label: 'Diablo 4',
      year: 2023
    }


  ];

  toRemoveOneVideoGame(id: number): void {
    console.info(id);
    this.list.splice(id, 1);
  }

  toRemoveVideoGameItem(item: VideoGame): void {
    this.list = this.list.filter((currentItem) => currentItem.id != item.id);
  }
}
