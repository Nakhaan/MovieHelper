import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component  } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-shotlist',
    standalone: true,
    imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule
    ],
    templateUrl: './shotlist.component.html',
    styleUrls: ['./shotlist.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShotlistComponent {

  protected keywords = ["Scène","Plan","Valeur de plan","Angle","Mouvement","Temps Estim."];

  protected data = [
    { col1: 'Scène', col2: 'Plan', col3: 'Valeur de plan',col4: 'Angle', col5: 'Mouvement', col6: 'Temps Estim.' },
    { col1: 'Scène', col2: 'Plan', col3: 'Valeur de plan',col4: 'Angle', col5: 'Mouvement', col6: 'Temps Estim.' },
  ];

  protected form: FormGroup = new FormGroup({
    col1: new FormControl(''),
    col2: new FormControl(''),
    col3: new FormControl(''),
    col4: new FormControl(''),
    col5: new FormControl(''),
    col6: new FormControl(''),
  });

  protected addRow() {
    this.data.push({ ...this.form.value });
    this.form.reset();
  }

  protected removeRow(index: number) {
    this.data.splice(index, 1);
  }
}
