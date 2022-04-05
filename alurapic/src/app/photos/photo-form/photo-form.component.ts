import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      .subscribe(() => {
        this.alertService.success('upload completado com sucesso!', true);
        this.router.navigate(['/user', this.userService.getUserName()]);
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
