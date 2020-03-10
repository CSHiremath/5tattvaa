import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlankTemplateComponent} from './template/blank-template.component';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';

export const routes: Routes = [{
  // path: '',
  // redirectTo: 'dashboard',
  // pathMatch: 'full'
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Courier Service Management'
  },
  children: [
    {
      path: 'home',
      loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule),
      data: {
        title: 'payment Page'
      },
    },

  ]
}, ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
