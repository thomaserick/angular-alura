import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss'],
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Output() liked: EventEmitter<void> = new EventEmitter();
  @Input()
  description = '';
  @Input() src = '';
  @Input() likes = 0;
  private debouce$: Subject<void> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.debouce$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.liked.emit());
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  like(): void {
    this.debouce$.next();
  }
}
