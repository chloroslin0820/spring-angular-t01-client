import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatGridListModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatGridListModule,
  ],
})
export class AngularMaterialModule {}
