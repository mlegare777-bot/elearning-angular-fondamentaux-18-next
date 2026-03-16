import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GetAllPeopleService } from './get-all-people';
import { Personne } from '../modele/personne';

@Injectable({
  providedIn: 'root',
})
export class GetAllPersonneApplicatif {
  private readonly infra = inject(GetAllPeopleService);

  getAll(): Observable<Personne[]> {
    return this.infra.getAll().pipe( // pipe : fonction utilisée dans les modèles pour transformer les données de manière déclarative avant leur affichage.
      map(result => result.results.map(item => ({
        id: +item.uid, //+ permet de tranformer string en INT (Méthode la plus rapide)
        surname: item.name
      })))) // appele a chaque next
  }
}
