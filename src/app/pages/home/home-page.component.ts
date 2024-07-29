import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule, SocialLinksComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private router: Router) {}

  navigateToAboutPage = () => this.router.navigate(['about']);
}
