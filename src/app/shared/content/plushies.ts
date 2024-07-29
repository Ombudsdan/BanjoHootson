import Plushie from '../interfaces/plushie';

export const BigMonkey: Plushie = {
  name: 'Big Monkey',
  bio: 'Known as “Big Monk” to his friends. He is a Premier Toys chimpanzee. He is distant cousin and the oldest in the family.',
  birthday: 'His birthday is 14th September and was born in 2016.',
  imgFileName: 'big-monkey.jpg',
};

export const Djungel: Plushie = {
  name: 'Djungel',
  bio: 'Djungel is my Brother. He is also an Ikea Djungelskog Orangutan. He mostly likes chilling at home with his piggy.',
  birthday: 'His birthday is 26th September and was born in 2021.',
  imgFileName: 'djungel.jpg',
};

export const Mandy: Plushie = {
  name: 'Mandy',
  bio: 'Mandy is my Sister. She is an Ikea Djungelskog Orangutan. She likes flowers, cats, the colour pink and lots of chocolate.',
  birthday: 'Her birthday is 30th October and was born in 2023.',
  imgFileName: 'mandy.jpg',
};

export const AllPlushies = [Mandy, Djungel, BigMonkey];
