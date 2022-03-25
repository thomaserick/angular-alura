import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class PhotoFormModule {}
