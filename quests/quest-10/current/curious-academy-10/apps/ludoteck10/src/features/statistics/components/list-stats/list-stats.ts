import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { StatList } from '../../models';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-stats',
  imports: [AsyncPipe],
  templateUrl: './list-stats.html',
  styleUrl: './list-stats.css',
})
export class ListStats implements OnInit {

  private readonly route = inject(ActivatedRoute);

  protected readonly stats$ = this.route.data.pipe(
    //cast : equivalent de 
    //    map(data => data['stats'] as StatList)
    map<{ [key: string | symbol]: any }, StatList>(data => data['stats'])
  );

  protected readonly title$ = this.route.data.pipe(
    map<{ [key: string | symbol]: any }, StatList>(data => data['title'])
  );

  ngOnInit(): void {
    this.stats$.subscribe(stats => {
      console.log(stats);
    })
  }

}
