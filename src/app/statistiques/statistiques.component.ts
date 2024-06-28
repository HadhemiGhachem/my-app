import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartData  } from 'chart.js';

// const color = Chart.helpers.color;

const color = Chart.helpers.color;
const data:ChartData = {
  labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label:'Dataset1',
    backgroundColor: color('green').alpha(0.5).rgbString(),
    borderColor: 'green',
    borderWidth: 1,
    data: [
      50,
      25,
      17,
      22,
      31,
      47,
      2
    ]

  },{
    label: 'Dataset 2',
    backgroundColor: color('blue').alpha(0.5).rgbString(),
    borderColor: 'blue',
    borderWidth: 1,
    data: [
      30,
      45,
      2,
      11,
      19,
      40,
      32
    ]
  }]
}


@Component({
  selector: 'app-statistiques',
  standalone: true,
  imports: [ ],
  templateUrl: './statistiques.component.html',
  styleUrl: './statistiques.component.css'
})
export class StatistiquesComponent implements AfterViewInit {
  @ViewChild('myCanvas', { static: true }) myCanvas: ElementRef;

  private context : CanvasRenderingContext2D | null;

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');

      if(this.context) {
        const c : Chart = new Chart(this.context, {
          type: 'bar',
          data : data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              }
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Month'
                }
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Value'
                }
              }
            },
          }
          
        });
      }
  }
}
