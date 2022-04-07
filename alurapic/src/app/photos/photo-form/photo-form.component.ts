import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss'],
})
export class PhotoFormComponent implements OnInit {
  photoForm!: FormGroup;
  file!: File;
  preview!: any;
  percentDone = 0;

  constructor(
    private readonly formBuild: FormBuilder,
    private readonly photoService: PhotoService,
    private readonly router: Router,
    private readonly alertService: AlertService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.photoForm = this.formBuild.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload(): void {
    // const dados = this.photoForm.getRawValue();
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;
    this.photoService
      .upload(description, allowComments, this.file)
      .pipe(
        finalize(() =>
          this.router.navigate(['/user', this.userService.getUserName()])
        )
      )
      .subscribe((event: HttpEvent<any>) => {
        if (event.type == HttpEventType.UploadProgress) {
          let total = event.total as number;
          this.percentDone = Math.round((100 * event.loaded) / total);
        } else if (event.type == HttpEventType.Response) {
          this.alertService.success('upload completado com sucesso!', true);
        }
      });
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.file = files[0];
    const reader = new FileReader();
    reader.onload = () => (this.preview = reader.result);
    reader.readAsDataURL(files[0]);
  }
}
