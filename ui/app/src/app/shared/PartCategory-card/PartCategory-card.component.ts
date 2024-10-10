import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PartCategory-card.component.html',
  styleUrls: ['./PartCategory-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PartCategory-card]': 'true'
  }
})

export class PartCategoryCardComponent {


}