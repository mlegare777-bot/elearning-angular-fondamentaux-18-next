import { Component, input, output } from '@angular/core';
import { VideoGame, VideoGames } from '../../modele/video-game';

@Component({
  selector: 'app-table-video-games',
  imports: [],
  templateUrl: './table-video-games.html',
  styleUrl: './table-video-games.css',
})
export class TableVideoGames {
  items = input.required<VideoGames>();
  title = input.required<string>();

  askToRemoveOneLement = output<number>();
  askToRemoveItem = output<VideoGame>();

  clickToRemove(id: number): void {
    this.askToRemoveOneLement.emit(id);
  }

  clickToRemoveItem(item: VideoGame): void {
    this.askToRemoveItem.emit(item);
  }

}
