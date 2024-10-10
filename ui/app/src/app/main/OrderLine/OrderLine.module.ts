import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ORDERLINE_MODULE_DECLARATIONS, OrderLineRoutingModule} from  './OrderLine-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    OrderLineRoutingModule
  ],
  declarations: ORDERLINE_MODULE_DECLARATIONS,
  exports: ORDERLINE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderLineModule { }