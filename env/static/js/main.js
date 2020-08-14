
//use of jquery 
Chart.defaults.global.defaultFontSize = 24;
Chart.defaults.global.defaultFontFamily = "Georgia";


var scatterdata = JSON.parse( jspoints)
    var gooddata = [];
    var labeldata = [];
    Object.keys(scatterdata.draft_pick).forEach( function (key) {
        gooddata.push({x: scatterdata.draft_pick[key] , y : scatterdata.total[key], label: scatterdata.player[key]  })
        
        labeldata.push(scatterdata.player[key]);
         
    })
    labeldata.toString()
     
    var ctx2 = document.getElementById("myChart2");
    var myChart2 = new Chart(ctx2, {
        type: 'scatter',
        
        data: {  
            labels: labeldata,        
            datasets: [{ 
                label: '2019 Season',
                
                data: gooddata,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                pointBorderColor: "rgba(0, 0, 0, 0.5)",
                pointBackgroundColor: "rgba(40, 167, 69, 0.8)",
                borderWidth: 1
                }],
        },
        options: {
            scales: {
                xAxes: [{pointLabels:{
                        fontSize: 44
                    },
                    scaleLabel: { 
                        display:true, 
                        labelString: 'Draft pick',
                        fontSize: 40,
                        
                    },
                    
                    type: 'linear',
                    position: 'bottom'
                        }],
                yAxes: [{
                    scaleLabel: { 
                        display:true, 
                        labelString: 'Total Points'               
                    },
                }]
                
            },                  
            layout: {
                padding: {
                    left: 60,
                    right: 60,
                    top: 50,
                    bottom: 50
                        }
                    },
                    tooltips: {
                      /*  yAxes: [{
                            ticks:{fontSize: 12
                                }
                        }], */
                        callbacks: {
                            enabled: false,
                            label: function(tooltipItem, data) {
                                var label = data.labels[tooltipItem.index];
                                return label + " " + tooltipItem.yLabel + " points " ;                            
                            }
                        }
                    }
                    

            }

        });
    

