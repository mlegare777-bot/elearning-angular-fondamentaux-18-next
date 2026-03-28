import { Component, inject, input, output } from '@angular/core';
import { VideoGame, VideoGames } from '../../modele/video-game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-video-games',
  imports: [],
  templateUrl: './table-video-games.html',
  styleUrl: './table-video-games.css',
})
export class TableVideoGames {
  private readonly router = inject(Router);

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

  editOne(item: VideoGame): void {
    this.router.navigate(['jeux-videos', item.id]);
  }
}
