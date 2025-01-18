import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  movieId: string | null = null;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}
  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.movieId = params.get('id');  // Retrieve the movie ID from the URL

    //   if (this.movieId) {
    //     this.movieService.getMovieDetails(this.movieId).subscribe(data => {
    //       this.movieDetails = data;
    //     });
    //   }
    // });
  }
}
