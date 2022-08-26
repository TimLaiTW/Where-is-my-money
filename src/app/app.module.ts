import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';
import { GroupComponent } from './pages/group/group.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { ReportComponent } from './pages/report/report.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { GroupDialogComponent } from './component/group-dialog/group-dialog.component';
import { GroupListCardComponent } from './component/group-list-card/group-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    GroupComponent,
    TransactionComponent,
    ReportComponent,
    WelcomeComponent,
    GroupDialogComponent,
    GroupListCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
