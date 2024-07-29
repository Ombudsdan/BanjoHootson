import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Mandy from '../../../../shared/content/mandy';
import Djungel from '../../../../shared/content/djungel';
import BigMonkey from '../../../../shared/content/big-monkey';

@Component({
  selector: 'app-family-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './family-section.component.html',
  styleUrl: './family-section.component.scss',
})
export class FamilySectionComponent {
  plushies = [Mandy, Djungel, BigMonkey];
}
