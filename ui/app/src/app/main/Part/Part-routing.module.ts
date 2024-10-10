import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartHomeComponent } from './home/Part-home.component';
import { PartNewComponent } from './new/Part-new.component';
import { PartDetailComponent } from './detail/Part-detail.component';

const routes: Routes = [
  {path: '', component: PartHomeComponent},
  { path: 'new', component: PartNewComponent },
  { path: ':id', component: PartDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Part-detail-permissions'
      }
    }
  },{
    path: ':part_id/Inventory', loadChildren: () => import('../Inventory/Inventory.module').then(m => m.InventoryModule),
    data: {
        oPermission: {
            permissionId: 'Inventory-detail-permissions'
        }
    }
},{
    path: ':part_id/OrderLine', loadChildren: () => import('../OrderLine/OrderLine.module').then(m => m.OrderLineModule),
    data: {
        oPermission: {
            permissionId: 'OrderLine-detail-permissions'
        }
    }
}
];

export const PART_MODULE_DECLARATIONS = [
    PartHomeComponent,
    PartNewComponent,
    PartDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartRoutingModule { }