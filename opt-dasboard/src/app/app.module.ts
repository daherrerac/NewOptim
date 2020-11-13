import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WellViewComponent } from './well-view/well-view.component';
import { FooterComponent } from './footer/footer.component';
import { PredictionViewComponent } from './prediction-view/prediction-view.component';
import { FieldViewComponent } from './field-view/field-view.component';
import { CallbackComponent } from './components/callback/callback.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WellViewComponent,
    FooterComponent,
    PredictionViewComponent,
    FieldViewComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
