import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-introduction-section',
  templateUrl: './introduction-section.component.html',
  styleUrls: ['./introduction-section.component.scss'],
  imports: [],
})
export class IntroductionSectionComponent {
  constructor(private router: Router) {}

  navigateToAboutPage = () => this.router.navigate(['about']);
}
