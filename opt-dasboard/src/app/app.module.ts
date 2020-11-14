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

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

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
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
