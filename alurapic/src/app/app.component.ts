import { Component, OnInit } from '@angular/core';
import { Photos } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  photos!: Photos;

  constructor(private readonly photoService: PhotoService) {}

  
  ngOnInit(): void {
    this.photoService.listFromUser('flabvio').subscribe((photos) => {
      this.photos = photos;
    });
  }
}
