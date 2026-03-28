import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { Loggeduser } from '../component/login/models/logged.user';
import { AuthenticateUser } from '../component/login/models/authenticate.user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateUserService {

  private readonly userStore = new BehaviorSubject<Loggeduser | undefined>(undefined);

  logIn(authentivateUser: AuthenticateUser): Observable<Loggeduser> {
    const user: Loggeduser = {
      username: 'JohnDoe',
      firstName: 'John',
      lastName: 'Doe',
      token: 'testzzzz'
    };

    return of(user).pipe(
      delay(1000),
      tap(user => this.userStore.next(user))
    );
  }

  get isAuthentificated(): boolean {
    return this.userStore.value !== undefined;
  }

  get asObservable(): Observable<Loggeduser | undefined> {
    return this.userStore.asObservable();
  }
}
