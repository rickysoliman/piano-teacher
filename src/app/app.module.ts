import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './components/song/song.component';
import { MeasureComponent } from './components/measure/measure.component';
import { LineOrSpaceComponent } from './components/line-or-space/line-or-space.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    MeasureComponent,
    LineOrSpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
