import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading!: string;

  constructor(private readonly loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService
      .getLoading()
      .pipe(map((loadingType) => loadingType.valueOf()))
      .subscribe((type) => (this.loading = type));
  }
}
