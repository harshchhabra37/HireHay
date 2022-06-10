import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppliedListComponent} from "./applied-list/applied-list.component"

const routes: Routes = [
  {path:"visited_list", component:AppliedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
