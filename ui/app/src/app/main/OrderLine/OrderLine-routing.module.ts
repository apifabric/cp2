import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderLineHomeComponent } from './home/OrderLine-home.component';
import { OrderLineNewComponent } from './new/OrderLine-new.component';
import { OrderLineDetailComponent } from './detail/OrderLine-detail.component';

const routes: Routes = [
  {path: '', component: OrderLineHomeComponent},
  { path: 'new', component: OrderLineNewComponent },
  { path: ':id', component: OrderLineDetailComponent,
    data: {
      oPermission: {
        permissionId: 'OrderLine-detail-permissions'
      }
    }
  }
];

export const ORDERLINE_MODULE_DECLARATIONS = [
    OrderLineHomeComponent,
    OrderLineNewComponent,
    OrderLineDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderLineRoutingModule { }