import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component  } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BehaviorSubject, Observable, combineLatestWith, map, of } from 'rxjs';
import { MatRippleModule } from '@angular/material/core';
import { Renderer2, ElementRef } from '@angular/core';

interface Data {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
}

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
      MatInputModule,
      MatRippleModule
    ],
    templateUrl: './shotlist.component.html',
    styleUrls: ['./shotlist.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShotlistComponent {

  protected keywords = ["Scène","Plan","Valeur de plan","Angle","Mouvement","Objectif","Ouverture","Acteurs","Description","Temps Estim."];

  protected data = [
    { col1: 'Scène', col2: 'Plan', col3: 'Valeur de plan',col4: 'Angle', col5: 'Mouvement', col6: 'Temps Estim.' },
    { col1: 'Scène', col2: 'Plan', col3: 'Valeur de plan',col4: 'Angle', col5: 'Mouvement', col6: 'Temps Estim.' },
  ];

  protected refreshData$ = new BehaviorSubject<Data | null>(null);
  protected data$: Observable<Data[]>;

  protected form: FormGroup = new FormGroup({
    col1: new FormControl(''),
    col2: new FormControl(''),
    col3: new FormControl(''),
    col4: new FormControl(''),
    col5: new FormControl(''), 
    col6: new FormControl(''),
  });

  public constructor(private renderer: Renderer2, private el: ElementRef) {
    this.data$ = this.refreshData$.pipe(
      combineLatestWith(of(this.data)),
      map(([data, dataList]) => {
        if(data) {
          dataList.push(data);
        }
        return dataList;
      })
    )
    ;
  }

  ngAfterViewInit() {
    this.renderer.listen(window, 'resize', (event) => {
      this.toggleClickableDiv(window.innerWidth);
    });
  
    this.toggleClickableDiv(window.innerWidth);
  }

  toggleClickableDiv(width: number) {
    const clickableDiv = this.el.nativeElement.querySelector('.clickable-div');
    const alwaysClickableButton = this.el.nativeElement.querySelector('.always-clickable-button');
  
    if (width < 600) {
      this.renderer.setStyle(clickableDiv, 'pointer-events', 'auto');
    } else {
      this.renderer.setStyle(clickableDiv, 'pointer-events', 'none');
      this.renderer.setStyle(alwaysClickableButton, 'pointer-events', 'auto');
    }
  }
  
  
  

  protected addRow() {
    this.refreshData$.next({ ...this.form.value })
    this.form.reset();
  }

  protected removeRow(index: number) {
    this.data.splice(index, 1);
  }

  onClick(event: Event) {
    if (window.innerWidth < 600 && !(event.target instanceof HTMLButtonElement)) {
      // Faites ce que vous voulez faire ici
      alert('La div a été cliquée!');
    }
  }
  

}
