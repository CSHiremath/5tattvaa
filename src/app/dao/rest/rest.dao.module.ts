import { NgModule} from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppState } from '../../app.service';

import {
    RestDaoFactory,
} from "."

const REST_SERVICES = [
    RestDaoFactory,
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    
  ],
  providers: [
      ...REST_SERVICES,AppState
  ]
})

export class RestDaoModule {}
