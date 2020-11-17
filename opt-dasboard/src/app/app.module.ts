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

import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { HomeComponent } from './home/home.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WellViewComponent,
    FooterComponent,
    PredictionViewComponent,
    FieldViewComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
