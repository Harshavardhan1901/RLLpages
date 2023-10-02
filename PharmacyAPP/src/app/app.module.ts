import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './componets/admin-home/admin-home.component';
import { AboutComponent } from './componets/about/about.component';
import { FeedbackcrudComponent } from './componets/feedbackcrud/feedbackcrud.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './componets/home-page/home-page.component';
import { OnlyfeedbackComponent } from './componets/onlyfeedback/onlyfeedback.component';
import { FeedbackadminComponent } from './componets/feedbackadmin/feedbackadmin.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AboutComponent,
    FeedbackcrudComponent,
    HomePageComponent,
    OnlyfeedbackComponent,
    FeedbackadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
