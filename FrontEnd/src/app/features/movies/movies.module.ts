import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from '../../core/widgets/widgets.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../shared/shared.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FilterMoviesComponent } from './filter-movies/filter-movies.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule,
    MoviesRoutingModule,
    FormsModule, ReactiveFormsModule, NgbModule, SharedModule
  ],
  exports: [
    ListMoviesComponent,
    UpdateMovieComponent
  ],
  providers: [],
  declarations: [ListMoviesComponent, UpdateMovieComponent, AddMovieComponent, FilterMoviesComponent]
})
export class MoviesModule { }
