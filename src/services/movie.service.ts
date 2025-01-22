import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private cache: Map<string, any> = new Map();

  constructor(private http: HttpClient) {}

  getMovies(title: string): Observable<any> {
    if (this.cache.has(`search:${title}`)) {
      return of(this.cache.get(`search:${title}`));
    }

   // return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=9e393b3e456e1b90065cd1406251c131`);  
    return this.http
      .get<any>(`http://localhost:8081/movies/searchMovies?query=${title}`)
      .pipe(
        tap((data) => {
          this.cache.set(`search:${title}`, data); 
        })
      );
  }

  getMovieDetails(id: any): Observable<any> {
    if (this.cache.has(`details:${id}`)) {
      return of(this.cache.get(`details:${id}`));
    }
   // return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=9e393b3e456e1b90065cd1406251c131`);  
    return this.http
      .get<any>(`http://localhost:8081/movies/getMovieDetails/${id}`)
      .pipe(
        tap((data) => {
          this.cache.set(`details:${id}`, data); 
        })
      );
  }
}


