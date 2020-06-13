import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  CurrentDate: number;
  number: number = 0;
  name: string = '';

  numbers(currency: number): void {
    this.number = currency;
  }

  pipes(name: string): void {
    this.name = name;
  }

  date(): void {
    this.CurrentDate = Date.now();
  }
}