import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../../../components/social-links/social-links.component';

@Component({
  selector: 'app-about-page-social-links-section',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './social-links-section.component.html',
  styleUrl: './social-links-section.component.scss',
})
export class AboutPageSocialLinksSectionComponent {}
