import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
  standalone:true
})
export class MovieCardComponent implements OnChanges {
  @Input() movie: any;
  imageUrl: string | undefined;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movie'] && this.movie?.backdrop_path) {
      this.imageUrl = `https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`;
    }
  }
  navigateToMovieDetails(): void {
    this.router.navigate([`/movie/${this.movie.id}`]); // Navigate to movie details page
  }
}
