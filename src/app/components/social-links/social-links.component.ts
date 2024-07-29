import { Component, Input } from '@angular/core';
import { IconWithLinkComponent } from '../icon-with-link/icon-with-link.component';
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faThreads,
} from '@fortawesome/free-brands-svg-icons';
import Sizes from '../../shared/types/sizes';

@Component({
  selector: 'app-social-links',
  standalone: true,
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
  imports: [IconWithLinkComponent],
})
export class SocialLinksComponent {
  faFacebook = faFacebook;
  faThreads = faThreads;
  faInstagram = faInstagram;
  faXTwitter = faXTwitter;

  @Input() size?: Sizes;
  @Input() colour: 'light' | 'dark' = 'dark';
}
