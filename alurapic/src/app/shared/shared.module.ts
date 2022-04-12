import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { VmessageComponent } from './components/vmessage/vmessage.component';
import { DarkenOnHoverDirective } from './directives/darken-on-hover/darken-on-hover.directive';
import { ImmediateClickDirective } from './directives/immediate-click/immediate-click.directive';
import { GlobalErrorHandler } from './errors/global-error-handler/global-error-handler';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    CardComponent,
    DarkenOnHoverDirective,
    VmessageComponent,
    ImmediateClickDirective,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    NotFoundComponent,
    DarkenOnHoverDirective,
    VmessageComponent,
    ImmediateClickDirective,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
})
export class SharedModule {}
