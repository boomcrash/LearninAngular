import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrincipalComponent } from "./page-principal/page-principal.component";



const routes: Routes = [
  {path:'',component:PagePrincipalComponent},
  {path:'pagePrincipal',component:PagePrincipalComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
