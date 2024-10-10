import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Manufacturer-card.component.html',
  styleUrls: ['./Manufacturer-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Manufacturer-card]': 'true'
  }
})

export class ManufacturerCardComponent {


}