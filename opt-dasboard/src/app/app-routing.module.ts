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
import { UploadblobComponent } from './components/uploadblob/uploadblob.component';
import { PozoComponent } from './components/pozo/pozo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListarPozoComponent } from './components/pozo/listar-pozo/listar-pozo.component';

// { path: 'carga', component: UploadFilesComponent, canActivate: [AuthGuard]},

const routes: Routes = [
  { path: 'historico/pozo', component: WellViewComponent},
  { path: 'historico/campo', component: FieldViewComponent},
  { path: 'prediccion', component: PredictionViewComponent},
  { path: 'clientes', component: ClientesComponent},
 // { path: 'adicionar', component: FormFieldComponent},
  { path: 'adicionar', component: PozoComponent},
 // { path: 'carga', component: UploadFilesComponent},
  { path: 'carga', component: UploadblobComponent},
  { path: 'callback', component: CallbackComponent},
  { path: '', component: HomeComponent},
  { path: 'pozos', component: ListarPozoComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
