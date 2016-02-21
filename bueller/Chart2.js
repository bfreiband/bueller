'use strict'

var myBarChart2;

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
    myBarChart2 = new Chart(ctx).Bar(data, option);
})

function updateCompChart(a, b, c, d, e) {
    myBarChart2.datasets[0].bars[0].value += a;
    myBarChart2.datasets[0].bars[1].value += b;
    myBarChart2.datasets[0].bars[2].value += c;
    myBarChart2.datasets[0].bars[3].value += d;
    myBarChart2.datasets[0].bars[4].value += e;
    myBarChart2.update();
    // Calling update now animates the position of March from 90 to 50.
}