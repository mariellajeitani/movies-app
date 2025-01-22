import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
  standalone:true
})
export class MovieCardComponent {
  @Input() movie: any;
  imageUrl: string | undefined;

  constructor(private router: Router) {}

  navigateToMovieDetails(): void {
    this.router.navigate([`/movie/${this?.movie?.title}`], { queryParams: { id: this?.movie?.id } }); 
  }
}
