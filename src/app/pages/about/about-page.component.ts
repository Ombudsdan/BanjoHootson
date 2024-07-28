import { Component } from '@angular/core';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { SocialLinksSectionComponent } from './components/social-media-section/social-media-section.component';
import { FamilySectionComponent } from './components/family-section/family-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  imports: [
    WelcomeSectionComponent,
    FamilySectionComponent,
    SocialLinksSectionComponent,
  ],
})
export class AboutPageComponent {}
