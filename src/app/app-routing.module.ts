import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"form",component:FormComponent},
  {path:"form/id",component:FormComponent},
  {path:"update/:Id",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
