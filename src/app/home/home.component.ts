import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public constructor(public dialog: MatDialog) { }

  public openDialog() {
    this.dialog.open(DialogComponent);
  }
}
