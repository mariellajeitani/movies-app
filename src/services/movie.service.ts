import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=9e393b3e456e1b90065cd1406251c131');  
  }
}

