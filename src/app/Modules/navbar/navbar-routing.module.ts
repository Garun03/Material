import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'', component: HomeComponent, children:[
    { path:'about', component:AboutComponent},
    { path:'contact', component:ContactComponent},
    { path:'services', component:ServicesComponent},
    { path:'login', component:LoginComponent},
    { path:'', redirectTo:'navbar/home', pathMatch:'full'},
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
