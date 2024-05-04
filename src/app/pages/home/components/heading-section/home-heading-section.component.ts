import { Component } from '@angular/core';
import { ImageComponent } from '../../../../components/image/image.component';

@Component({
  standalone: true,
  selector: 'app-home-heading-section',
  templateUrl: './home-heading-section.component.html',
  styleUrls: ['./home-heading-section.component.scss'],
  imports: [ImageComponent],
})
export class HomeHeadingSectionComponent {}
