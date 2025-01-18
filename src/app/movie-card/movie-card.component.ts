import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movie'] && this.movie?.backdrop_path) {
      this.imageUrl = `https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`;
    }
  }
}
