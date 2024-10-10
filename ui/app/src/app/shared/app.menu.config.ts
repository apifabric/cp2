import { MenuRootItem } from 'ontimize-web-ngx';

import { CarModelCardComponent } from './CarModel-card/CarModel-card.component';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { InventoryCardComponent } from './Inventory-card/Inventory-card.component';

import { ManufacturerCardComponent } from './Manufacturer-card/Manufacturer-card.component';

import { OrderCardComponent } from './Order-card/Order-card.component';

import { OrderLineCardComponent } from './OrderLine-card/OrderLine-card.component';

import { PartCardComponent } from './Part-card/Part-card.component';

import { PartCategoryCardComponent } from './PartCategory-card/PartCategory-card.component';

import { ShipmentCardComponent } from './Shipment-card/Shipment-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';

import { WarehouseCardComponent } from './Warehouse-card/Warehouse-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'CarModel', name: 'CARMODEL', icon: 'view_list', route: '/main/CarModel' }
    
        ,{ id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'Inventory', name: 'INVENTORY', icon: 'view_list', route: '/main/Inventory' }
    
        ,{ id: 'Manufacturer', name: 'MANUFACTURER', icon: 'view_list', route: '/main/Manufacturer' }
    
        ,{ id: 'Order', name: 'ORDER', icon: 'view_list', route: '/main/Order' }
    
        ,{ id: 'OrderLine', name: 'ORDERLINE', icon: 'view_list', route: '/main/OrderLine' }
    
        ,{ id: 'Part', name: 'PART', icon: 'view_list', route: '/main/Part' }
    
        ,{ id: 'PartCategory', name: 'PARTCATEGORY', icon: 'view_list', route: '/main/PartCategory' }
    
        ,{ id: 'Shipment', name: 'SHIPMENT', icon: 'view_list', route: '/main/Shipment' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
        ,{ id: 'Warehouse', name: 'WAREHOUSE', icon: 'view_list', route: '/main/Warehouse' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CarModelCardComponent

    ,CustomerCardComponent

    ,EmployeeCardComponent

    ,InventoryCardComponent

    ,ManufacturerCardComponent

    ,OrderCardComponent

    ,OrderLineCardComponent

    ,PartCardComponent

    ,PartCategoryCardComponent

    ,ShipmentCardComponent

    ,SupplierCardComponent

    ,WarehouseCardComponent

];