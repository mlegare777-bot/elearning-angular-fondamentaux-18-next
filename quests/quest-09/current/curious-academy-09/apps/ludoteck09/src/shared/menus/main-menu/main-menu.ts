import { U } from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css',
})
export class MainMenu {

  private readonly router = inject(Router);

  goToUrl(url: string, ...optionnalParams: any[]): void {
    this.router.navigate([url, optionnalParams]);
  }

}
