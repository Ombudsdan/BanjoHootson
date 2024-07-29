import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Mandy from '../../shared/content/mandy';
import Djungel from '../../shared/content/djungel';
import BigMonkey from '../../shared/content/big-monkey';
import { PlushieBioComponent } from '../../components/plushie-bio/plushie-bio.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  imports: [CommonModule, PlushieBioComponent, SocialLinksComponent],
})
export class AboutPageComponent {
  plushies = [Mandy, Djungel, BigMonkey];
}
