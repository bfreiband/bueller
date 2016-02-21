'use strict'

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
            data: [65, 59, 80, 81, 56]
        },
    ]
    };
    var option = {
        scaleShowLabels: true,
        scaleFontSize: 14
    };

    //step 2: get the context to the element we are looking at
    var ctx = document.getElementById("myChart2").getContext('2d');
    var myBarChart = new Chart(ctx).Bar(data, option);
})