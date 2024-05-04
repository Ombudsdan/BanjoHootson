import { Component, Input } from '@angular/core';
import { IconWithLinkComponent } from '../icon-with-link/icon-with-link.component';
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Sizes } from '../../helpers/types';

@Component({
  selector: 'app-social-links',
  standalone: true,
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
  imports: [IconWithLinkComponent],
})
export class SocialLinksComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faXTwitter = faXTwitter;

  @Input() size?: Sizes;
}
