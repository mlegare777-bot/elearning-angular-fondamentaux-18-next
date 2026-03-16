import { Component, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthenticateUser } from './models/authenticate.user';
import { JsonPipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { AuthenticateUserService } from '../../services/authenticate-user';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, JsonPipe, MatDividerModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private readonly service = inject(AuthenticateUserService);
  private readonly router = inject(Router);

  // utilisateurLogin: AuthenticateUser = {
  //   username: '',
  //   password: ''
  // }

  //form = viewChild<NgForm>('loginForm');

  logIn(): void {
    this.service.logIn({
      username: 'JohnDoe',
      password: 'test123'
    }).pipe(
      tap(item => this.router.navigate(['jeux-videos']))
    ).subscribe();
    // console.log(this.utilisateurLogin);
  }
  // save(): void {

  //   //   console.info('valid:' + this.form()?.form.valid);
  //   //   console.info('errors:' + this.form()?.form.controls['label'].errors);
  //   //   console.info(this.videoGame);
  // }



}
