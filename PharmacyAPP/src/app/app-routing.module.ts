import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './componets/admin-home/admin-home.component';
import { AboutComponent } from './componets/about/about.component';
import { HomePageComponent } from './componets/home-page/home-page.component';


const routes: Routes = [
  { path: 'admin', component: AdminHomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'Home', component: HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
