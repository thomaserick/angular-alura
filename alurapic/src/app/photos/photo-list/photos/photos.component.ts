import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photos } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnChanges {
  @Input() photos!: Photos;
  rows: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos'] && this.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photos) {
    const newRows = [];
    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
