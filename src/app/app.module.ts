import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ListitemsComponent } from './components/listitems/listitems.component';
import { CarditemComponent } from './components/carditem/carditem.component';
import { DeeperDirectivesComponent } from './components/deeper-directives/deeper-directives.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { HttpClient, HttpClientModule  } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HelpcenterComponent,
    LandingpageComponent,
    ListitemsComponent,
    CarditemComponent,
    DeeperDirectivesComponent,
    HighlightedDirective,
    NgxUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
