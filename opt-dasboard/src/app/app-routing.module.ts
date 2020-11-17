import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellViewComponent } from './well-view/well-view.component';
import { FieldViewComponent } from './field-view/field-view.component';
import { PredictionViewComponent } from './prediction-view/prediction-view.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'historico/pozo', component: WellViewComponent, canActivate: [AuthGuard]},
  { path: 'historico/campo', component: FieldViewComponent, canActivate: [AuthGuard]},
  { path: 'prediccion', component: PredictionViewComponent, canActivate: [AuthGuard]},
  { path: 'callback', component: CallbackComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
