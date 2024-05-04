import { Component } from '@angular/core';
import { AboutPageMeetMyFamilySectionComponent } from './components/meet-my-family-section/about-page-meet-my-family-section.component';
import { AboutPageHeadingSectionComponent } from './components/heading-section/about-page-heading-section.component';
import { AboutPageFollowSectionComponent } from './components/follow-section/about-page-follow-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  imports: [
    AboutPageMeetMyFamilySectionComponent,
    AboutPageHeadingSectionComponent,
    AboutPageFollowSectionComponent,
  ],
})
export class AboutPageComponent {}
