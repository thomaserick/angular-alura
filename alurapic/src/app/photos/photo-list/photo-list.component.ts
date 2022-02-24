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
  hasMore: boolean = true;
  currentPage: number = 1;
  userName!: string;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.userName = this._activatedRoute.snapshot.params['userName'];
    this.photos = this._activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }
}
