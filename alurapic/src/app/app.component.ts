import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  photos = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
      description: 'Leão',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Okonjima_Lioness.jpg/1024px-Okonjima_Lioness.jpg',
      description: 'Leoa',
    },
  ];
}
