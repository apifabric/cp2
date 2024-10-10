import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CARMODEL_MODULE_DECLARATIONS, CarModelRoutingModule} from  './CarModel-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CarModelRoutingModule
  ],
  declarations: CARMODEL_MODULE_DECLARATIONS,
  exports: CARMODEL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarModelModule { }