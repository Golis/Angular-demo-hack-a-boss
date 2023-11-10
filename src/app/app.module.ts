import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ListitemsComponent } from './listitems/listitems.component';
import { CarditemComponent } from './carditem/carditem.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HelpcenterComponent,
    LandingpageComponent,
    ListitemsComponent,
    CarditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
