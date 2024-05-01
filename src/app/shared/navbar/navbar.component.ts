import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [FontAwesomeModule]
})
export class NavbarComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faXTwitter = faXTwitter;
}
