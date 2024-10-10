import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturerHomeComponent } from './home/Manufacturer-home.component';
import { ManufacturerNewComponent } from './new/Manufacturer-new.component';
import { ManufacturerDetailComponent } from './detail/Manufacturer-detail.component';

const routes: Routes = [
  {path: '', component: ManufacturerHomeComponent},
  { path: 'new', component: ManufacturerNewComponent },
  { path: ':id', component: ManufacturerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Manufacturer-detail-permissions'
      }
    }
  },{
    path: ':manufacturer_id/CarModel', loadChildren: () => import('../CarModel/CarModel.module').then(m => m.CarModelModule),
    data: {
        oPermission: {
            permissionId: 'CarModel-detail-permissions'
        }
    }
}
];

export const MANUFACTURER_MODULE_DECLARATIONS = [
    ManufacturerHomeComponent,
    ManufacturerNewComponent,
    ManufacturerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturerRoutingModule { }