import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LandingPageComponent } from '../landingPage.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent,
    data: {
      title: 'LandingPage Component'
    }
  }
];
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class LandingPageRoutingModule { }
