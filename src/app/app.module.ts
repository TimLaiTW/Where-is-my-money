import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';
import { GroupComponent } from './pages/group/group.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { ReportComponent } from './pages/report/report.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { GroupListCardComponent } from './component/group-list-card/group-list-card.component';
import { AddExpenseDialogComponent } from './component/dialog/add-expense-dialog/add-expense-dialog.component';
import { ExpenseListTableComponent } from './component/expense-list-table/expense-list-table.component';
import { ModuleFriendDialogComponent } from './component/dialog/module-friend-dialog/module-friend-dialog.component';
import { ModuleExpenseDialogComponent } from './component/dialog/module-expense-dialog/module-expense-dialog.component';
import { EditBtnGroupComponent } from './component/button-group/edit-btn-group/edit-btn-group.component';
import { ReportTableComponent } from './component/report-table/report-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    GroupComponent,
    ExpenseComponent,
    ReportComponent,
    WelcomeComponent,
    GroupListCardComponent,
    AddExpenseDialogComponent,
    ExpenseListTableComponent,
    ModuleFriendDialogComponent,
    ModuleExpenseDialogComponent,
    EditBtnGroupComponent,
    ReportTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
