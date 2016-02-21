'use strict'

var myBarChart;

$(function() {
    //step 3: create a data object
    var data = {
        labels: ["Unclear", "Fairly Unclear", "Just Right", "Fairly Detailed", "Over Detailed"],
        datasets: [
        {
            label: "Number of Students",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [0, 0, 0, 0, 0]
        },
    ]
    };
    var option = {
        scaleShowLabels: true,
        scaleFontSize: 14
    };

    //step 2: get the context to the element we are looking at
    var ctx = document.getElementById("myChart2").getContext('2d');
    myBarChart = new Chart(ctx).Bar(data, option);
})

function updateCompChart(a, b, c, d, e) {
    myBarChart.datasets[0].bars[0].value += a;
    myBarChart.datasets[0].bars[1].value += b;
    myBarChart.datasets[0].bars[2].value += c;
    myBarChart.datasets[0].bars[3].value += d;
    myBarChart.datasets[0].bars[4].value += e;
    myBarChart.update();
    // Calling update now animates the position of March from 90 to 50.
}