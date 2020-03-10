import { Component, OnInit } from '@angular/core';
import {  ChangeDetectorRef } from '@angular/core';
import { ExternalLibraryService } from 'app/shared/razorpay.component';

declare let Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  
  constructor(private razorpayService: ExternalLibraryService, private cd:  ChangeDetectorRef) { }
  name = 'Angular';
  response;
  razorpayResponse;
  showModal = false;

  ngOnInit() {
    this.razorpayService
      .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
      .subscribe();
  }

  RAZORPAY_OPTIONS = {
    // "key": "rzp_test_WMHWnR6EYJOqTX",\
    "key": "rzp_test_fe2koKh05MC7af",
    "amount": "",
    "name": "Novopay",
    "order_id": "",
    "description": "Load Wallet",
    "image": "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
    "prefill": {
      "name": "",
      "email": "test@test.com",
      "contact": "",
      "method": ""
    },
    "modal": {},
    "theme": {
      "color": "#0096C5"
    }
  };

  public proceed() {
    this.RAZORPAY_OPTIONS.amount = 100 + '00';

    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    // this.showPopup();

    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response) {
    console.log(response);
    this.razorpayResponse = `Razorpay Response`;
    this.showModal = true;
    this.cd.detectChanges()
    document.getElementById('razorpay-response').style.display = 'block';
  }

  public test() {
    document.getElementById('response-modal').style.display = 'block';
    this.response = `dummy text`;
  }


}
