import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DisplayDataComponent } from './display-data/display-data.component';


const routes: Routes = [
  { path: 'user', component: MyComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'dispaly', component: DisplayDataComponent},
  { path: '', component: LoginComponentComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
