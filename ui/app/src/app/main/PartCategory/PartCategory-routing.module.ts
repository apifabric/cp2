import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartCategoryHomeComponent } from './home/PartCategory-home.component';
import { PartCategoryNewComponent } from './new/PartCategory-new.component';
import { PartCategoryDetailComponent } from './detail/PartCategory-detail.component';

const routes: Routes = [
  {path: '', component: PartCategoryHomeComponent},
  { path: 'new', component: PartCategoryNewComponent },
  { path: ':id', component: PartCategoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PartCategory-detail-permissions'
      }
    }
  },{
    path: ':category_id/Part', loadChildren: () => import('../Part/Part.module').then(m => m.PartModule),
    data: {
        oPermission: {
            permissionId: 'Part-detail-permissions'
        }
    }
}
];

export const PARTCATEGORY_MODULE_DECLARATIONS = [
    PartCategoryHomeComponent,
    PartCategoryNewComponent,
    PartCategoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartCategoryRoutingModule { }