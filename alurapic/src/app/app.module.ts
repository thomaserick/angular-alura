import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './shared/errors/errors.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PhotosModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    ErrorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
