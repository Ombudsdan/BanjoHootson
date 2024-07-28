import { Component } from '@angular/core';
import {
  NavigationSkipped,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faThreads,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [
    RouterModule,
    FontAwesomeModule,
    SocialLinksComponent,
    FontAwesomeModule,
  ],
})
export class NavbarComponent {
  faBars = faBars;
  faInstagram = faInstagram;
  faThreads = faThreads;
  faFacebook = faFacebook;
  faX = faXTwitter;
  isOpen = false;

  closeResponsiveMenu() {
    this.isOpen = false;
  }

  constructor(router: Router) {
    router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationStart ||
            event instanceof NavigationSkipped
        )
      )
      .forEach(() => this.closeResponsiveMenu());
  }

  /* Toggle between adding and removing the "responsive" class to navmenu when the user clicks on the icon */
  toggleResponsive() {
    this.isOpen = !this.isOpen;
  }
}
