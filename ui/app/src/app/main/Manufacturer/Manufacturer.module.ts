import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MANUFACTURER_MODULE_DECLARATIONS, ManufacturerRoutingModule} from  './Manufacturer-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ManufacturerRoutingModule
  ],
  declarations: MANUFACTURER_MODULE_DECLARATIONS,
  exports: MANUFACTURER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManufacturerModule { }