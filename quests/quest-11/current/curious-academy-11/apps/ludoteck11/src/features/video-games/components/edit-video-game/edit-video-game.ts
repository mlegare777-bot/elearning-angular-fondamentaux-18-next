import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatFormField, MatLabel, MatHint } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-video-game',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatIcon, MatInputModule],
  templateUrl: './edit-video-game.html',
  styleUrl: './edit-video-game.css',
})
export class EditVideoGame implements OnInit {

  private readonly route = inject(ActivatedRoute);

  private readonly formBuilder = inject(FormBuilder);
  protected readonly videoGameFormGroup = this.formBuilder.group({
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
    console.info('');//this.route.snapshot.params['id']);
  }

  saveOne(): void {
    console.log('saveOne', this.videoGameFormGroup.valid);
  }


}
