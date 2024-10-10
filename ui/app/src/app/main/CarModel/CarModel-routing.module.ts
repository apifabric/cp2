import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarModelHomeComponent } from './home/CarModel-home.component';
import { CarModelNewComponent } from './new/CarModel-new.component';
import { CarModelDetailComponent } from './detail/CarModel-detail.component';

const routes: Routes = [
  {path: '', component: CarModelHomeComponent},
  { path: 'new', component: CarModelNewComponent },
  { path: ':id', component: CarModelDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CarModel-detail-permissions'
      }
    }
  },{
    path: ':car_model_id/Part', loadChildren: () => import('../Part/Part.module').then(m => m.PartModule),
    data: {
        oPermission: {
            permissionId: 'Part-detail-permissions'
        }
    }
}
];

export const CARMODEL_MODULE_DECLARATIONS = [
    CarModelHomeComponent,
    CarModelNewComponent,
    CarModelDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarModelRoutingModule { }