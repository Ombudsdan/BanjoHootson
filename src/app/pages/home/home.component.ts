import { Component } from '@angular/core';
import { HomeHeadingSectionComponent } from './components/heading-section/home-heading-section.component';
import { HomeIntroductionSectionComponent } from './components/introduction-section/home-introduction-section.component';
import { HomeConnectSectionComponent } from './components/connect-section/home-connect-section.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    HomeHeadingSectionComponent,
    HomeIntroductionSectionComponent,
    HomeConnectSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
