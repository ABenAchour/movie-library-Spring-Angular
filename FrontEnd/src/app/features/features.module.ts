import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  imports: [
    CommonModule,
    MoviesModule,

    FeaturesRoutingModule
  ],
  declarations: [HomeComponent]
})
export class FeaturesModule { }

