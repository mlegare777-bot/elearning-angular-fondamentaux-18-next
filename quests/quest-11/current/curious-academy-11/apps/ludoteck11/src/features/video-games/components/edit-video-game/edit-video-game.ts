import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  protected titleFormControl = new FormControl('');

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


    //   this.route.params.subscribe({
    //     next: paramsItem => {
    //       console.log(paramsItem['id']);
    //     }
    //   }
    // );

  }

  saveOne(): void {
    console.log('saveOne', this.titleFormControl.value);
  }


}
