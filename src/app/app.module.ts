import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './components/song/song.component';
import { MeasureComponent } from './components/measure/measure.component';
import { LineComponent } from './components/line/line.component';
import { SpaceComponent } from './components/space/space.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    MeasureComponent,
    LineComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
