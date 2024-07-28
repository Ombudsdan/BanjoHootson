import { Component } from '@angular/core';
import { JumbotronSectionComponent } from './components/jumbotron-section/jumbotron-section.component';
import { IntroductionSectionComponent } from './components/introduction-section/introduction-section.component';
import { ConnectSectionComponent } from './components/connect-section/connect-section.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [
    JumbotronSectionComponent,
    IntroductionSectionComponent,
    ConnectSectionComponent,
    SocialLinksComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
