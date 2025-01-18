import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  movieId: string | null = null;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.movieId = params['id'];  // Get the 'id' from query params
    console.log('Movie ID from query params:', this.movieId);

    if (this.movieId) {
      this.movieService.getMovieDetails(this.movieId).subscribe(data => {
        this.movieDetails = data;
        console.log('Movie details:', this.movieDetails);
      });
    }
  });
}
}
