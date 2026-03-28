import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { RouterOutlet } from '@angular/router';
import { MainMenu } from '../shared/menus/main-menu/main-menu';
import { ComputePipe } from '../shared/tools/routes/titles/compute-pipe';


@Component({
  imports: [ComputePipe, MatSliderModule, RouterOutlet, MainMenu],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ludoteck12';
  value = 5;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + '000';
    }

    return `${value}`;
  }

}
