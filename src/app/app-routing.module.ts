import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { TemplateComponent } from './layout/template/template.component';

const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: SignInComponent},
  {path: 'home', component: TemplateComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
