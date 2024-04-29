import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../components/button/button.component";
import { ImageComponent } from "../../../../components/image/image.component";

@Component({
    standalone: true,
    selector: 'app-home-introduction-section',
    templateUrl: './home-introduction-section.component.html',
    styleUrls: ['./home-introduction-section.component.scss'],
    imports: [ButtonComponent, ImageComponent]
})
export class HomeIntroductionSectionComponent {

}
