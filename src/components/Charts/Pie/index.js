import React from 'react';
import './styles.scss';
import ReactApexChart from 'react-apexcharts';

const Pie = () => {
  const [series, setSeries] = React.useState([44, 55, 13, 43, 22, 44, 55, 13, 43]);
  const options = {
    chart: {
      width: 380,
      type: 'donut',
    },
    colors: ['#9ACEFF', '#FF955B', '#3DD1BA', '#FCAE52', '#9E8ADB', '#F7D490', '#E79798', '#D06EE1', '#70B056'],
    labels: ['Assu', 'Abu', 'Futo', 'Ui', "Unilag", "Uniport", "Unn", "Uniuyo", "Unical"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 100
        },
        legend: {
          show: false,
          position: 'bottom'
        }
      }
    }],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10
        },
        donut: {
          size: '40%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: "#031A2F",
              offsetY: -10,
              formatter: function (val) {
                return val
              }
            },
            value: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: "#031A2F",
              offsetY: 10,
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              showAlways: false,
              label: 'Total',
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: '#373d3f',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0)
              }
            }
          }
        },
      }
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    }
  }
  return (
    <ReactApexChart options={options} series={series} type="donut" height={500} />)
}

export default Pie