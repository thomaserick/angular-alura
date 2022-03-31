import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  photo$!: Observable<Photo>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly photoService: PhotoService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(id);
  }
}
