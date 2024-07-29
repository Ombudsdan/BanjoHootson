import { Component, Input } from '@angular/core';
import { Plushie } from '../../shared/content/plushies';

@Component({
  selector: 'app-plushie-bio',
  standalone: true,
  imports: [],
  templateUrl: './plushie-bio.component.html',
  styleUrl: './plushie-bio.component.scss',
})
export class PlushieBioComponent {
  @Input({ required: true }) plushie!: Plushie;

  name: Plushie['name'] = '';
  bio: Plushie['bio'] = '';
  birthday: Plushie['birthday'] = '';
  imgFileName: Plushie['imgFileName'] = '';

  ngOnChanges() {
    this.name = this.plushie.name;
    this.bio = this.plushie.bio;
    this.birthday = this.plushie.birthday;
    this.imgFileName = this.plushie.imgFileName;
  }
}
