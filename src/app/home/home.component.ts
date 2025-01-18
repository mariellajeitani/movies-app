import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
    imports: [
      RouterOutlet,
      ButtonModule,
      IconFieldModule,
      InputIconModule,
      InputTextModule,
      FloatLabelModule,
      FormsModule,
      MovieCardComponent,
      CommonModule,SkeletonModule
    ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  loading: boolean = false;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loading = true
    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies = data.results;
        console.log('Fetched Movies:', this.movies);
        this.loading = false
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
        this.loading = false
      },
    });
  }
  value3 = '';
}
