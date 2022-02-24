import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  debounce: Subject<string> = new Subject<string>();

  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';

  constructor() {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => this.onTyping.emit(filter));
  }

  ngOnInit(): void {}

  doFilter(event: { target: HTMLInputElement }) {
    this.debounce.next(event.target.value);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
