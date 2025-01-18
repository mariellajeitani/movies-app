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
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');  
console.log('paramssss',params)
      if (this.movieId) {
        console.log(1,this.movieId)
        this.movieService.getMovieDetails(this.movieId).subscribe(data => {
          this.movieDetails = data;
          console.log('detailss',this.movieDetails)
        });
      }
    });
  }
}
