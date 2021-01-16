import Chart from 'chart.js';
import $ from 'jquery'

var ctx = $('#myChart')
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['30','60','90','120','150','180','210','240','270','300'],
        datasets: [{
            label: 'Diagram Angry',
            borderColor: 'rgb(255, 99, 132)',
            data: [30, 23, 16, 9, 2, 24, 18, 12, 6, 0]
        }]
    },
    options: {}
}); 

var ctx = $('#myChartsatu')
var chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['30','60','90','120','150','180','210','240','270','300'],
        datasets: [{
            label: 'Diagram Disgust',
            borderColor: 'rgb(255, 99, 132)',
            data: [30, 24, 18, 12, 6, 25, 20, 15, 10, 5]
        }]
    },
    options: {}
}); 

var ctx = $('#myChartdua')
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['30','60','90','120','150','180','210','240','270','300'],
        datasets: [{
            label: 'Diagram fear',
            borderColor: 'rgb(255, 99, 132)',
            data: [30, 25, 20, 15, 10, 5, 26, 19, 12, 5]
        }]
    },
    options: {}
}); 

var ctx = $('#myCharttiga')
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['30','60','90','120','150','180','210','240','270','300'],
        datasets: [{
            label: 'Diagram Happy',
            borderColor: 'rgb(255, 99, 132)',
            data: [33, 26, 19, 12, 5, 27, 24, 21, 18, 15]
        }]
    },
    options: {}
}); 

var ctx = $('#myChartempat')
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['30','60','90','120','150','180','210','240','270','300'],
        datasets: [{
            label: 'Diagram Sad',
            borderColor: 'rgb(255, 99, 132)',
            data: [30, 27, 24, 21, 18, 15, 12, 9, 6, 3]
        }]
    },
    options: {}
}); 

var ctx = $('#myChartlima')
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['30','60','90','120','150','180','210','240','270','300'],
        datasets: [{
            label: 'Diagram Surprise',
            borderColor: 'rgb(255, 99, 132)',
            data: [30, 28, 26, 24, 22, 20, 18, 16, 14, 12]
        }]
    },
    options: {}
}); 
    
var ctx = $('#myChartenam')
var chart2 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['30','60','90','120','150','180','210','240','270','300'],
        datasets: [{
            label: 'Diagram Neutral',
            borderColor: 'rgb(255, 99, 132)',
            data: [30, 29, 28, 27, 26, 25, 24, 23, 22, 21]
        }]
    },
    options: {}
}); 





