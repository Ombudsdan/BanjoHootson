import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../../../components/social-links/social-links.component';

@Component({
  selector: 'app-home-page-social-links-section',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './home-page-social-links-section.component.html',
  styleUrl: './home-page-social-links-section.component.scss',
})
export class HomePageSocialLinksSectionComponent {}
