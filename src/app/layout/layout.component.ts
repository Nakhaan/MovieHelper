import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        CommonModule,
        MatToolbarModule
    ],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

}
