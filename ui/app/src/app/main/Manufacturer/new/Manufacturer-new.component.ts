import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Manufacturer-new',
  templateUrl: './Manufacturer-new.component.html',
  styleUrls: ['./Manufacturer-new.component.scss']
})
export class ManufacturerNewComponent {
  @ViewChild("ManufacturerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}