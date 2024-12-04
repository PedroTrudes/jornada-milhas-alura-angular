import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})

export class FormBuscaComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {//passando a funcao que fica no botton de dialog
    this.dialog.open(ModalComponent, {
      maxWidth: '640px',
      width: '50%',
      height: 'auto',
      disableClose: true
    });
} 
}