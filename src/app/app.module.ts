import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './layout/template/template.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { StatusComponent } from './layout/status/status.component';
import { NewsFeedComponent } from './layout/news-feed/news-feed.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { QuestionModalComponent } from './layout/modals/question-modal/question-modal.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NavBarComponent,
    StatusComponent,
    NewsFeedComponent,
    SideBarComponent,
    QuestionModalComponent,
    SignInComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
