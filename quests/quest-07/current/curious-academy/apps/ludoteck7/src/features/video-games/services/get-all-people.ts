import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleApiResult } from './models';

@Injectable({
  providedIn: 'root', //singleton charge au debut de l application
})
export class GetAllPeopleService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<PeopleApiResult> {
    return this.http.get<PeopleApiResult>('https://swapi.tech/api/people/');
  }
}
