import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faXTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Sizes } from '../../helpers/types';

@Component({
  selector: 'app-icon-with-link',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './icon-with-link.component.html',
  styleUrl: './icon-with-link.component.scss'
})
export class IconWithLinkComponent implements OnInit {
  @Input() icon!: IconDefinition;
  @Input() size?: Sizes = 'md';

  href?: string;

  ngOnInit(): void {
    switch(this.icon) {
      case faFacebook:
        this.href = 'https://facebook.com/banjohootson';
        break;
        case faInstagram:
          this.href = "https://instagram.com/banjohootson";
          break;
          case faXTwitter:
            this.href = "https://twitter.com/banjohootson";
            break;
            default:
              console.error("No valid icon provided for app-icon-with-link component.");
              break;
    }
  }
}
