var lineChartData = {
    labels: ["1999", "2001", "2003", "2005", "2007", "2009", "2011", "2013","2015","2017","2019"], //顯示區間名稱
    datasets: [{
        label: '台灣經濟成長率', // tootip 出現的名稱
        lineTension: 0, // 曲線的彎度，設0 表示直線
        backgroundColor: "#AA0000",
        borderColor: "#AA0000",
        borderWidth: 4,
        data: [67.3,-14, 42.2,53.8,65.8,-16.1,36.7,24.8,14.7,33.1,29.6], // 資料
        fill: false, // 是否填滿色彩
    }, {
        label: '台灣失業率',
        lineTension: 0,
        fill: false,
        backgroundColor: "#FFBB00",
        borderColor: "#FFBB00",
        borderWidth: 4,
        data: [27.6, 33.5, 50.3, 40.6, 37.9, 53.1, 46.4,41.6, 37.1, 37.8,36.4],
    },
    {
        label: '台灣物價上漲率',
        lineTension: 0,
        fill: false,
        backgroundColor: "#0044BB",
        borderColor: "#0044BB",
        borderWidth: 4,
        data: [3.9,23.6,10.8,4.9,3.5,14.7,11,11.2,-9.4,22.4,1.8],
    },
     ]
};
function drawLineCanvas(ctx,data) {
    window.myLine = new Chart(ctx, {  //先建立一個 chart
        type: 'line', // 型態
        data: data,
        options: {
                responsive: true,
                legend: { //是否要顯示圖示
                    display: true,
                },
                tooltips: { //是否要顯示 tooltip
                    enabled: true
                },
                scales: {  //是否要顯示 x、y 軸
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }]
                },
            }
    });
};
window.onload = function () {
    var ctx = document.getElementById("canvas").getContext("2d");
    drawLineCanvas(ctx,lineChartData);
};