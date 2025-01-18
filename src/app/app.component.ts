
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
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
import { filter } from 'rxjs';
import { BreadcrumbModule } from 'primeng/breadcrumb';

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
    HomeComponent,
    BreadcrumbModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  breadcrumbItems: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) 
      .subscribe(() => {
        this.updateBreadcrumbs();
      });
  }

  updateBreadcrumbs(): void {
    this.breadcrumbItems = [{ label: 'Home', routerLink: '/' }]; 

    let currentRoute = this.route.root;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;

      const title = currentRoute.snapshot.paramMap.get('title') ;
      if (title) {
        this.breadcrumbItems.push({ label: title, routerLink: this.router.url });
      }
    }
  }

}

