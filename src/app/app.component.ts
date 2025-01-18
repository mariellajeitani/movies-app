
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieService } from '../services/movie.service';
// import { HttpClientModule } from '@angular/common/http'; // Use HttpClientModule
import { CommonModule } from '@angular/common';  // Import CommonModule
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    MovieCardComponent,
    CommonModule,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  // movies = [];

  // constructor(private movieService: MovieService) {}

  // ngOnInit(): void {
  //   this.movieService.getMovies().subscribe({
  //     next: (data) => {
  //       this.movies = data.results;
  //       console.log('Fetched Movies:', this.movies[0]);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching movies:', err);
  //     },
  //   });
  // }

  // title = 'movies-library-app';
  // value3 = '';
}

