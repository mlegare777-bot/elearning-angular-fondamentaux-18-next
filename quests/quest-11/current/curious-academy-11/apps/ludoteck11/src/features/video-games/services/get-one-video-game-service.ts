import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { VideoGame } from '../modele/video-game';

@Injectable({
  providedIn: 'root',
})
export class GetOneVideoGameService {
  getOne(id: number): Observable<VideoGame> {
    return of(
      {
        id: id,
        label: 'test Game',
        year: 2022
      }).pipe(delay(1000));
  }
}
