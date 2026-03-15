import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-route-title',
  imports: [],
  templateUrl: './route-title.html',
  styleUrl: './route-title.css',
})
export class RouteTitle implements OnInit {

  private readonly title = inject(Title);

  ngOnInit(): void {
    //    this.title.setTitle(document.title);
    this.title.setTitle('This is only test for title :) ');
    console.info(this.title.getTitle());
  }
}
