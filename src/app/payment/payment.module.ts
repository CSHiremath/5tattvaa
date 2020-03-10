import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing/payment-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    PaymentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [ PaymentComponent ],
  providers: [
  ]
})
export class PaymentModule { }
