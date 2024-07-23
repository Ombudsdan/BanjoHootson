import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  IconDefinition,
  faThreads,
} from '@fortawesome/free-brands-svg-icons';
import { Sizes } from '../../helpers/types';

@Component({
  selector: 'app-icon-with-link',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './icon-with-link.component.html',
  styleUrl: './icon-with-link.component.scss',
})
export class IconWithLinkComponent {
  @Input() icon!: IconDefinition;
  @Input() size?: Sizes = 'md';
  @Input() showText?: boolean;

  href?: string;
  text?: string;

  get linkWithText(): { href: string; text: string } {
    switch (this.icon) {
      case faInstagram:
        return {
          href: 'https://instagram.com/banjohootson',
          text: 'Instagram',
        };
      case faThreads:
        return {
          href: 'https://www.threads.net/@banjohootson',
          text: 'Threads',
        };
      case faFacebook:
        return { href: 'https://facebook.com/banjohootson', text: 'Facebook' };
      case faXTwitter:
        return {
          href: 'https://twitter.com/banjohootson',
          text: 'X / Twitter',
        };
      default:
        console.error(
          'No valid icon provided for app-icon-with-link component.'
        );
        return { href: '', text: '' };
    }
  }
}
