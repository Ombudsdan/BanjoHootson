import { Component } from '@angular/core';
import { EmojiComponent } from '../../components/emoji/emoji.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [EmojiComponent],
})
export class FooterComponent {}
