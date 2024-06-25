import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormViewComponent } from '../form-view.component';

const routes: Routes = [{path: '', component: FormViewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormViewRoutingModule { }
