import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { DeeperDirectivesComponent } from './components/deeper-directives/deeper-directives.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { EmployeesModule } from './employees/employees.module';
import { LightswitchCompComponent } from './lightswitch-comp/lightswitch-comp.component';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HelpcenterComponent,
    LandingpageComponent,
    DeeperDirectivesComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    LightswitchCompComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeesModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
