import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`<app-inbox-screen></app-inbox-screen>`,
})
export class AppComponent {
  title = 'taskbox';
}
