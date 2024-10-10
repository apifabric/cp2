import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PARTCATEGORY_MODULE_DECLARATIONS, PartCategoryRoutingModule} from  './PartCategory-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PartCategoryRoutingModule
  ],
  declarations: PARTCATEGORY_MODULE_DECLARATIONS,
  exports: PARTCATEGORY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PartCategoryModule { }