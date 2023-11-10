import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { ListitemsComponent } from './listitems/listitems.component';

const routes: Routes = [
  {
    path:'',
    component: LandingpageComponent
  },
  {
    path: 'helpcenter',
    component: HelpcenterComponent
  },
  {
    path: 'employees',
    component: ListitemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
