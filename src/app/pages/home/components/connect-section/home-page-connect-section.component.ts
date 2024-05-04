import { Component } from '@angular/core';
import { ImageComponent } from '../../../../components/image/image.component';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../../../../components/social-links/social-links.component';

@Component({
  standalone: true,
  selector: 'app-home-page-connect-section',
  templateUrl: './home-page-connect-section.component.html',
  styleUrls: ['./home-page-connect-section.component.scss'],
  imports: [CommonModule, ImageComponent, SocialLinksComponent],
})
export class HomePageConnectSectionComponent {}
