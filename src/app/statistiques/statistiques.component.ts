import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {ChartData  } from 'chart.js';
import Chart from 'chart.js/auto';

// const color = Chart.helpers.color;

//const color = Chart.defaults.color;
const data:ChartData = {
  labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label:'Dataset1',
    backgroundColor: 'green',
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
    backgroundColor: 'blue',
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
  // this.context = this.myCanvas.nativeElement.getContext('2d');

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
