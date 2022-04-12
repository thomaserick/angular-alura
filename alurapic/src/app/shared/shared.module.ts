import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { VmessageComponent } from './components/vmessage/vmessage.component';
import { DarkenOnHoverDirective } from './directives/darken-on-hover/darken-on-hover.directive';
import { ImmediateClickDirective } from './directives/immediate-click/immediate-click.directive';

@NgModule({
  declarations: [
    CardComponent,
    DarkenOnHoverDirective,
    VmessageComponent,
    ImmediateClickDirective,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    DarkenOnHoverDirective,
    VmessageComponent,
    ImmediateClickDirective,
  ],
})
export class SharedModule {}
