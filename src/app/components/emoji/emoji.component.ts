import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-emoji',
  standalone: true,
  imports: [],
  templateUrl: './emoji.component.html',
  styleUrl: './emoji.component.scss',
})
export class EmojiComponent {
  @Input({ required: true }) src!: string;
  @Input() alt: string = 'Emoji';
}
