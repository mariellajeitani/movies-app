
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { BreadcrumbModule } from 'primeng/breadcrumb';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BreadcrumbModule,
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

