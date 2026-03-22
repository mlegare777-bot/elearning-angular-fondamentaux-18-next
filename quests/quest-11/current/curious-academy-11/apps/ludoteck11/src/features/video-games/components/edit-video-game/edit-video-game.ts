import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatFormField, MatLabel, MatHint } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { EditUpdateOneVideoGameService } from '../../services/edit-update-one-video-game-service';
import { VideoGame } from '../../modele/video-game';
import { GetOneVideoGameService } from '../../services/get-one-video-game-service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-video-game',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatIcon, MatInputModule],
  templateUrl: './edit-video-game.html',
  styleUrl: './edit-video-game.css',
})
export class EditVideoGame implements OnInit {

  private readonly route = inject(ActivatedRoute);

  private readonly updateOneService = inject(EditUpdateOneVideoGameService);
  private readonly getOneService = inject(GetOneVideoGameService);

  private readonly formBuilder = inject(FormBuilder);
  protected readonly videoGameFormGroup = this.formBuilder.nonNullable.group({
    label: ['', [Validators.required, Validators.minLength(3)]],
    year: [new Date().getFullYear(), [Validators.required, Validators.max(new Date().getFullYear())]]
  })


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
    console.info('id:' + this.route.snapshot.params['id']);

    this.route.params.pipe(
      map<{ [key: string | symbol]: any }, number>(params => params['id']),
      switchMap(id => this.getOneService.getOne(id))
    )
      .subscribe({
        next: item => {
          this.videoGameFormGroup.patchValue(item)
        }
      })

  }


  saveOne(): void {
    const videoGame: VideoGame = {
      label: '',
      year: 0
    };

    if (this.videoGameFormGroup.value.label) {
      videoGame.label = this.videoGameFormGroup.value.label;
    }
    if (this.videoGameFormGroup.value.year) {
      videoGame.year = this.videoGameFormGroup.value.year;
    }


    this.updateOneService.updateOne(videoGame).subscribe();
  }


}
