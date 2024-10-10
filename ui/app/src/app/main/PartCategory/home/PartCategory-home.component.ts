import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OTableButtonComponent, OTableComponent } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import {OReportModule,OReportStoreService} from 'ontimize-web-ngx-report'
import { OGridComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PartCategory-home',
  templateUrl: './PartCategory-home.component.html',
  styleUrls: ['./PartCategory-home.component.scss']
})
export class PartCategoryHomeComponent implements AfterViewInit {

  @ViewChild('table', { static: true }) table: OTableComponent;

  @ViewChild('button')
  protected button: OTableButtonComponent;

  ngAfterViewInit() {
  
  }

}