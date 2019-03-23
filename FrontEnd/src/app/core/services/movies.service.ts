import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from '../../../../node_modules/rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie';

const BASE_PATH = environment.basePath;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Movie[]> {


    return this.httpClient.get<Movie[]>(`${BASE_PATH}list`);
  }

  getMovie(index: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${BASE_PATH}get/${index}`);
  }
  deleteMovie(index: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${BASE_PATH}delete/${index}`);
  }
  updateMovie(index: string, movie: Movie) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: movie
    };

    return this.httpClient.put(`${BASE_PATH}update/${index}`, movie, httpOptions);

  }
  addMovie( movie: Movie) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: movie
    };

    return this.httpClient.post(`${BASE_PATH}add`, movie, httpOptions);

  }
}
