import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent {

  constructor(public dialog: MatDialog) { }

  closeRegistrationModal(): void {
    const dialogRef = this.dialog;

    dialogRef.closeAll();
  }
}
