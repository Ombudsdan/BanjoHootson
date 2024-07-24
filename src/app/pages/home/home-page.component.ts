import { Component } from '@angular/core';
import { HomePageHeadingSectionComponent } from './components/heading-section/home-page-heading-section.component';
import { HomePageIntroductionSectionComponent } from './components/introduction-section/home-page-introduction-section.component';
import { HomePageConnectSectionComponent } from './components/connect-section/home-page-connect-section.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { HomePageSocialLinksSectionComponent } from './components/social-links-section/home-page-social-links-section.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [
    HomePageHeadingSectionComponent,
    HomePageIntroductionSectionComponent,
    HomePageConnectSectionComponent,
    SocialLinksComponent,
    HomePageSocialLinksSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
