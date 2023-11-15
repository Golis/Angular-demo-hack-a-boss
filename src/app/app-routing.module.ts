import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { ListitemsComponent } from './components/listitems/listitems.component';
import { DeeperDirectivesComponent } from './components/deeper-directives/deeper-directives.component';

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
  },
  {
    path: 'deeper-directives',
    component: DeeperDirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
