import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../components/button/button.component";
import { ImageComponent } from "../../../../components/image/image.component";
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-home-connect-section',
    templateUrl: './home-connect-section.component.html',
    styleUrls: ['./home-connect-section.component.scss'],
    imports: [CommonModule, ButtonComponent, ImageComponent]
})
export class HomeConnectSectionComponent {

}
