import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatExpansionModule,
  MatBadgeModule,
  MatTabsModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatSelectModule,
  MatRippleModule
} from "@angular/material";
@NgModule({
  imports:      [ BrowserModule, FormsModule,  ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatExpansionModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSelectModule,
    MatRippleModule,
    MatInputModule,
    BrowserAnimationsModule
     ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
