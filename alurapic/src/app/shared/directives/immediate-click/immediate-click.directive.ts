import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Directive({
  selector: '[immediateClick]',
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private readonly element: ElementRef<any>,
    private readonly platFormDetector: PlatformDetectorService
  ) {}
  ngOnInit(): void {
    this.platFormDetector.isPlatformBrowser() &&
      this.element.nativeElement.click();
  }
}
