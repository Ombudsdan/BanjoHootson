import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home-page-introduction-section',
  templateUrl: './home-page-introduction-section.component.html',
  styleUrls: ['./home-page-introduction-section.component.scss'],
  imports: [],
})
export class HomePageIntroductionSectionComponent {
  constructor(private router: Router) {}

  navigateToAboutPage = () => this.router.navigate(['about']);
}
