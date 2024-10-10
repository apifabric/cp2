import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'CarModel', loadChildren: () => import('./CarModel/CarModel.module').then(m => m.CarModelModule) },
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'Inventory', loadChildren: () => import('./Inventory/Inventory.module').then(m => m.InventoryModule) },
    
        { path: 'Manufacturer', loadChildren: () => import('./Manufacturer/Manufacturer.module').then(m => m.ManufacturerModule) },
    
        { path: 'Order', loadChildren: () => import('./Order/Order.module').then(m => m.OrderModule) },
    
        { path: 'OrderLine', loadChildren: () => import('./OrderLine/OrderLine.module').then(m => m.OrderLineModule) },
    
        { path: 'Part', loadChildren: () => import('./Part/Part.module').then(m => m.PartModule) },
    
        { path: 'PartCategory', loadChildren: () => import('./PartCategory/PartCategory.module').then(m => m.PartCategoryModule) },
    
        { path: 'Shipment', loadChildren: () => import('./Shipment/Shipment.module').then(m => m.ShipmentModule) },
    
        { path: 'Supplier', loadChildren: () => import('./Supplier/Supplier.module').then(m => m.SupplierModule) },
    
        { path: 'Warehouse', loadChildren: () => import('./Warehouse/Warehouse.module').then(m => m.WarehouseModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }