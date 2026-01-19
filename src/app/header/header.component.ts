import { Component } from '@angular/core';

@Component({
  selector: 'ngg-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'angular lecture 2';
  fontSize = 19;
  color = 'green';

  ngOnInit() {
    console.log('Header component initialized');
    // setTimeout(() => {
    //   this.title = 'lec 2';
    // }, 2000);
  }

  ngOnDestroy() {
    console.log('Header component destroyed');
  }

  updateTitle(newTitle: string) {
    this.title = newTitle;
  }
}
