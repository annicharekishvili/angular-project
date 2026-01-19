import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'angular-project';
  observable: string = 'observer1';

  size = 24;

  navigate(str: string) {
    this.title = str;
  }
}
