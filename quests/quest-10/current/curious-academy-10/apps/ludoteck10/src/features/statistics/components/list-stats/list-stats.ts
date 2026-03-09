import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { StatList } from '../../models';

@Component({
  selector: 'app-list-stats',
  imports: [],
  templateUrl: './list-stats.html',
  styleUrl: './list-stats.css',
})
export class ListStats implements OnInit {

  private readonly route = inject(ActivatedRoute);
  protected readonly stats$ = this.route.data.pipe(
    map<{ [key: string | symbol]: any }, StatList>(data => data['stats'])
  );


  ngOnInit(): void {
    this.stats$.subscribe(stats => {
      console.log(stats);
    })
  }

}
