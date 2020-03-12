import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landingPage.component';
import { LandingPageRoutingModule } from './landingPage-routing/landingPage-routing.module';


@NgModule({
    imports: [
        LandingPageRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [LandingPageComponent],
    providers: [
    ]
})
export class LandingPageModule { }
