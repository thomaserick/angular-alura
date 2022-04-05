import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from '../../shared/components/alert/alert.service';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {
  photo$!: Observable<Photo>;
  photoId!: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly photoService: PhotoService,
    private readonly router: Router,
    private readonly alertService: AlertService,
    private readonly userSerive: UserService
  ) {}
  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(this.photoId);
  }

  remove() {
    this.photoService.removePhoto(this.photoId).subscribe(() => {
      this.alertService.success('Foto removida com sucesso!', true);
      this.router.navigate(['/user', this.userSerive.getUserName()]);
    });
  }
}
