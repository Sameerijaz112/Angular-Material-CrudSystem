import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog:MatDialog){}
  title = 'Angular-Material-CrudSystem';
  openDialog() {
    this.dialog.open(DialogComponent, {
    width:"100px"
    });
  }
}
