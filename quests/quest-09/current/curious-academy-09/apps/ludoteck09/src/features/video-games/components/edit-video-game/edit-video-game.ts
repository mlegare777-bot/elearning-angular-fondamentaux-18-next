import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-video-game',
  imports: [],
  templateUrl: './edit-video-game.html',
  styleUrl: './edit-video-game.css',
})
export class EditVideoGame implements OnInit {
  private readonly route = inject(ActivatedRoute);

  videoGameParams = toSignal(this.route.params);

  videogameId = computed(() => {
    let id = 0;
    const params = this.videoGameParams();
    if (params) {
      id = params['id'];
    }
    return id;
  }
  );



  ngOnInit(): void {

    this.route.params.subscribe({
      next: paramsItem => {
        console.log(paramsItem['id']);
      }
    });
  }

}
