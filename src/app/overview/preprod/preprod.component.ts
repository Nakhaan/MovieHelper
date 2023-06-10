import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-preprod',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './preprod.component.html',
    styleUrls: ['./preprod.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreprodComponent {

}
