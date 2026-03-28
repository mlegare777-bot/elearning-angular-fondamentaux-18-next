import { Injectable } from '@angular/core';
import { VideoGame } from '../modele/video-game';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditUpdateOneVideoGameService {
  updateOne(item: VideoGame): Observable<VideoGame> {
    return of(item).pipe(delay(1000));
  }
}
