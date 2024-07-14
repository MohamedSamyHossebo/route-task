import { Component } from '@angular/core';
import { ChartModule, Chart } from 'angular-highcharts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {

  userChart = new Chart({
    chart: { type: "line" },
    title: { text: 'Customer Informations' },
    series: [
      {
        name: 'Diagram Chart',
        data: [10, 2, 3, 6, 7, 20, 17, 14, 4, 19],
        color: 'black',
      } as any
    ]
  })

}