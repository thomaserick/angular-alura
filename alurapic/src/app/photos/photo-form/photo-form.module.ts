import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule,PhotoModule,RouterModule],
})
export class PhotoFormModule {}
