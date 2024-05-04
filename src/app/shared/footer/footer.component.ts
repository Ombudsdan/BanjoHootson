import { Component } from '@angular/core';
import { ImageComponent } from '../../components/image/image.component';
import { EmojiComponent } from '../../components/emoji/emoji.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [ImageComponent, EmojiComponent],
})
export class FooterComponent {}
