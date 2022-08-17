import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'navbar', loadChildren: () => import('./Modules/navbar/navbar.module').then(m => m.NavbarModule)},
  { path:'', redirectTo:'navbar/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
