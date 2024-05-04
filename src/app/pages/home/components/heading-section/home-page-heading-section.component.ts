import { Component } from '@angular/core';
import { ImageComponent } from '../../../../components/image/image.component';

@Component({
  standalone: true,
  selector: 'app-home-page-heading-section',
  templateUrl: './home-page-heading-section.component.html',
  styleUrls: ['./home-page-heading-section.component.scss'],
  imports: [ImageComponent],
})
export class HomePageHeadingSectionComponent {}
