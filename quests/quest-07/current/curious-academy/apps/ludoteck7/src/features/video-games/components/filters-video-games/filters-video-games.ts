import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { GetAllPersonneApplicatif } from '../../services/get-all-personne.applicatif';
import { filter, Subscription, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-filters-video-games',
  imports: [AsyncPipe],
  templateUrl: './filters-video-games.html',
  styleUrl: './filters-video-games.css',
})
export class FiltersVideoGames implements OnInit, OnDestroy {

  private readonly subscription = new Subscription();

  private readonly getAllPersonneApplicatif = inject(GetAllPersonneApplicatif);

  people$ = this.getAllPersonneApplicatif.getAll().pipe(
    filter(items => items.length > 0), //exemple de filter
    tap(items => console.info(items)) //debug facile de mon nexts
  );

  //on ne le voit pas, mais appel via un effect: donc appel suscribe dans cet effect
  peopleSignal$$ = toSignal(this.people$);

  ngOnInit(): void {
    const currentSubscription = this.people$.subscribe({
      next: items => {
        console.info(items);
      }
    });
    this.subscription.add(currentSubscription);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // private readonly getAllPeopleService = inject(GetAllPeopleService);
  // people$ = this.getAllPeopleService.getAll();

  // private readonly getAllPeopleService = inject(GetAllPeopleService);
  // people$: Observable<Personne[]> = this.getAllPeopleService.getAll().pipe( // pipe : fonction utilisée dans les modèles pour transformer les données de manière déclarative avant leur affichage.
  //   map(result => result.results.map(item => (
  //     {
  //       id: +item.uid, //+ permet de tranformer string en INT (Méthode la plus rapide)
  //       surname: item.name
  //     }))) // appele a chaque next
  // );



}
