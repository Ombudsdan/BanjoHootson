import { Component } from '@angular/core';
import { AboutPageWelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { AboutPageMeetMyFamilySectionComponent } from './components/meet-my-family-section/meet-my-family-section.component';
import { AboutPageSocialLinksSectionComponent } from './components/social-links-section/social-links-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  imports: [
    AboutPageWelcomeSectionComponent,
    AboutPageMeetMyFamilySectionComponent,
    AboutPageSocialLinksSectionComponent,
  ],
})
export class AboutPageComponent {}
