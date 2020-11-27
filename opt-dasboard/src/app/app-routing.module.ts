import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellViewComponent } from './well-view/well-view.component';
import { FieldViewComponent } from './field-view/field-view.component';
import { PredictionViewComponent } from './prediction-view/prediction-view.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';

// { path: 'carga', component: UploadFilesComponent, canActivate: [AuthGuard]},

const routes: Routes = [
  { path: 'historico/pozo', component: WellViewComponent},
  { path: 'historico/campo', component: FieldViewComponent},
  { path: 'prediccion', component: PredictionViewComponent},
  { path: 'adicionar', component: FormFieldComponent},
  { path: 'carga', component: UploadFilesComponent},
  { path: 'callback', component: CallbackComponent},
  { path: '', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
