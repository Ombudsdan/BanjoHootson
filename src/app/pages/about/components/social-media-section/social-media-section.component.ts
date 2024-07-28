import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../../../components/social-links/social-links.component';

@Component({
  selector: 'app-social-media-section',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './social-media-section.component.html',
  styleUrl: './social-media-section.component.scss',
})
export class SocialLinksSectionComponent {}
