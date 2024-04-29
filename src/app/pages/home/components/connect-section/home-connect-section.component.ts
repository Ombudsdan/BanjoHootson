import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../components/button/button.component";
import { ImageComponent } from "../../../../components/image/image.component";

@Component({
    standalone: true,
    selector: 'app-home-connect-section',
    templateUrl: './home-connect-section.component.html',
    styleUrls: ['./home-connect-section.component.scss'],
    imports: [ButtonComponent, ImageComponent]
})
export class HomeConnectSectionComponent {

}
