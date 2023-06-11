import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component  } from '@angular/core';

@Component({
    selector: 'app-shotlist',
    standalone: true,
    imports: [
      CommonModule
    ],
    templateUrl: './shotlist.component.html',
    styleUrls: ['./shotlist.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShotlistComponent {

}
