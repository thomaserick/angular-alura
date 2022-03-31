import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoDetailsModule } from './photo-detail/photo-details.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    PhotoDetailsModule,
  ],
})
export class PhotosModule {}
