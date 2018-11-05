import { Component, OnInit } from '@angular/core';
declare var $: any;
import '../../../../node_modules/peity/jquery.peity.min.js';

@Component({
  selector: 'app-peity',
  templateUrl: './peity.component.html',
  styleUrls: ['./peity.component.scss']
})
export class PeityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.bar-colours-1').peity('bar', {
      fill: ['rgba(93, 156, 236, 0.65)', 'rgba(153, 214, 131, 0.87)']
    });

    $('.bar-colours-2').peity('bar', {
      fill: ['rgba(44, 201, 144, 0.52)', 'rgba(44, 130, 201, 0.60)']
    });

    const updatingChart = $('.updating-chart').peity('line', {
      fill: 'rgba(140, 239, 243, 0.4)',
      stroke: 'rgb(140, 239, 243)'
    });
    const updatingChart1 = $('.updating-chart1').peity('line', {
      fill: 'rgba(95, 190, 170, 0.32)',
      stroke: 'rgba(95, 190, 170, 0.90)'
    });
    const updatingChart2 = $('.updating-chart2').peity('line', {
      fill: 'rgba(93, 156, 236, 0.45)',
      stroke: 'rgba(93, 156, 236, 0.91)'
    });
    const updatingChart3 = $('.updating-chart3').peity('line', {
      fill: 'rgba(178, 180, 253, 0.39)',
      stroke: 'rgba(178, 180, 253, 0.94)'
    });

    setInterval(function () {
      const random = Math.round(Math.random() * 10)
      const values = updatingChart.text().split(',')
      values.shift()
      values.push(random)

      updatingChart
        .text(values.join(','))
        .change()
    }, 1000);

    $('.data-attributes span').peity('donut');

    $('span.pie_1').peity('pie', {
      fill: ['#F1C40F', '#282256']
    });
    $('span.pie_2').peity('pie', {
      fill: ['#FC575E', '#2980B9']
    });
    $('span.pie_3').peity('pie', {
      fill: ['#785EDD', '#F6CD61']
    });
    $('span.pie_4').peity('pie', {
      fill: ['#EB9532', '#0F3057']
    });
    $('span.pie_5').peity('pie', {
      fill: ['#64DDBB', '#42729B']
    });
    $('span.pie_6').peity('pie', {
      fill: ['#97CE68', '#60646D']
    });
    $('span.pie_7').peity('pie', {
      fill: ['#00B5B5', '#517FA4']
    });
  }

}
