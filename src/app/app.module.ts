import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyComponentComponent } from './my-component/my-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    LoginComponentComponent,
    DisplayDataComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: LoginComponentComponent, pathMatch: 'full'},
      { path: 'register', component: DisplayDataComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'user', component: MyComponentComponent },
    ]),
    BrowserModule, HttpClientModule, ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatDatepickerModule,
    MatIconModule, MatCheckboxModule, MatProgressSpinnerModule,
    FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule,
     MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
