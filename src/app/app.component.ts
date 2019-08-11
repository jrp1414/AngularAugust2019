import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '[app-root]',
  selector: '.app-root',
  // templateUrl: './app.component.html',
  // template:"<app-header></app-header><h1>Inline Template Example</h1>",
  // template:`
  // <app-header></app-header>
  // <h1>Inline Template Example</h1>`,
  templateUrl:"./app.component.html"  
})
export class AppComponent {
  title = 'Weekend August';
}
