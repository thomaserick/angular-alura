import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photos } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos!: Photos;
  filter: string = '';

  constructor(
    private readonly _photoService: PhotoService,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userName = this._activatedRoute.snapshot.params['userName'];
    console.log(userName);
    this._photoService.listFromUser(userName).subscribe((photos) => {
      this.photos = photos;
    });
  }

  doFilter(event: { target: HTMLInputElement }) {
    this.filter = event.target.value;
  }
}
