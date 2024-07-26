import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page-meet-my-family-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meet-my-family-section.component.html',
  styleUrl: './meet-my-family-section.component.scss',
})
export class AboutPageMeetMyFamilySectionComponent {
  plushies: Plushie[] = [
    {
      name: 'Mandy',
      bio: 'Mandy is my Sister. She is an Ikea Djungelskog Orangutan. She likes flowers, cats, the colour pink and lots of chocolate.',
      birthday: 'Her birthday is 30th October and was born in 2023.',
      imgFileName: 'about-page-meet-my-family-section-mandy.jpg',
    },
    {
      name: 'Djungel',
      bio: 'Djungel is my Brother. He is also an Ikea Djungelskog Orangutan. He mostly likes chilling at home with his piggy.',
      birthday: 'His birthday is 26th September and was born in 2021.',
      imgFileName: 'about-page-meet-my-family-section-djungel.jpg',
    },
    {
      name: 'Big Monkey',
      bio: 'Known as “Big Monk” to his friends. He is a Premier Toys chimpanzee. He is distant cousin and the oldest in the family.',
      birthday: 'His birthday is 14th September and was born in 2016.',
      imgFileName: 'about-page-meet-my-family-section-big-monkey.jpg',
    },
  ];
}

interface Plushie {
  name: string;
  bio: string;
  birthday: string;
  imgFileName: string;
}
