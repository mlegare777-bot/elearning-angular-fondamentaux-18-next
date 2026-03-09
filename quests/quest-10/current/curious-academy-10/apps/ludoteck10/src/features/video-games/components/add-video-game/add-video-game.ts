import { JsonPipe } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { VideoGame } from '../../modele/video-game';

@Component({
  selector: 'app-add-video-game',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-video-game.html',
  styleUrl: './add-video-game.css',
})
export class AddVideoGame {

  videoGame: VideoGame = {
    label: '',
    year: (new Date()).getFullYear(),
  }

  form = viewChild<NgForm>('videoGameForm');

  save(): void {

    console.info('valid:' + this.form()?.form.valid);
    console.info('errors:' + this.form()?.form.controls['label'].errors);
    console.info(this.videoGame);
  }

}
