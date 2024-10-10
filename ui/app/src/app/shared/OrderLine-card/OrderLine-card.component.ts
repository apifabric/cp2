import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './OrderLine-card.component.html',
  styleUrls: ['./OrderLine-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.OrderLine-card]': 'true'
  }
})

export class OrderLineCardComponent {


}