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
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import {ProgressBarModule} from 'angular-progress-bar';
import { UploadblobComponent } from './components/uploadblob/uploadblob.component';
import { PozoComponent } from './components/pozo/pozo.component';
import { CrearPozoComponent } from './components/pozo/crear-pozo/crear-pozo.component';
import { ListarPozoComponent } from './components/pozo/listar-pozo/listar-pozo.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WellViewComponent,
    FooterComponent,
    PredictionViewComponent,
    FieldViewComponent,
    CallbackComponent,
    HomeComponent,
    FormFieldComponent,
    UploadFilesComponent,
    UploadblobComponent,
    PozoComponent,
    CrearPozoComponent,
    ListarPozoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProgressBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
