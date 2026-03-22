import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { delay, tap } from 'rxjs';
import { map, pairwise, switchMap } from 'rxjs/operators';
import { VideoGame } from '../../modele/video-game';
import { EditUpdateOneVideoGameService } from '../../services/edit-update-one-video-game-service';
import { GetOneVideoGameService } from '../../services/get-one-video-game-service';

@Component({
  selector: 'app-edit-video-game',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatIcon, MatInputModule],
  templateUrl: './edit-video-game.html',
  styleUrl: './edit-video-game.css',
})
export class EditVideoGame implements OnInit {

  private readonly route = inject(ActivatedRoute);

  private readonly getOneService = inject(GetOneVideoGameService);
  private readonly updateOneService = inject(EditUpdateOneVideoGameService);

  protected readonly isLoading = signal(false);

  private readonly formBuilder = inject(FormBuilder);



  protected readonly videoGameFormGroup = this.formBuilder.nonNullable.group({
    label: ['', [Validators.required, Validators.minLength(3)]],
    year: [new Date().getFullYear(), [Validators.required, Validators.max(new Date().getFullYear())]]
  })

  protected readonly setVideoGame$ = this.route.params.pipe(
    delay(1000),

    tap(() => this.isLoading.set(true)),
    map<{ [key: string | symbol]: any }, number>(params => params['id']),
    switchMap(id => this.getOneService.getOne(id)),
    tap(() => this.isLoading.set(true))
  )


  protected readonly detectChanges$ = this.videoGameFormGroup.valueChanges.pipe(
    pairwise(),
    takeUntilDestroyed());





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

    this.setVideoGame$
      .subscribe({
        next: item => {
          this.videoGameFormGroup.patchValue(item)
        }
      })



    this.detectChanges$
      .subscribe({
        next: (change) => console.info(change)
      });


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
