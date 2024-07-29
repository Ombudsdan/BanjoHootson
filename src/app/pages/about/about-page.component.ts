import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlushieBioComponent } from '../../components/plushie-bio/plushie-bio.component';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { AllPlushies } from '../../shared/content/plushies';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  imports: [CommonModule, PlushieBioComponent, SocialLinksComponent],
})
export class AboutPageComponent {
  plushies = AllPlushies;
}
