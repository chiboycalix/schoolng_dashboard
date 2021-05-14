import React from 'react';
import './styles.scss';
import ReactApexChart from 'react-apexcharts';


const BarChart = () => {
  const [series, setSeries] = React.useState([{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43, 21, 49, 13, 23, 20, 8, 13, 27, 33, 12, 33, 98]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27, 33, 12, 44, 55, 41, 67, 22, 43, 21, 49, 13, 9]
  }])

  const options = {
    colors: ['#031A2F', '#EB5933'],
    chart: {
      type: 'bar',
      height: 600,
      background: '#fff',

      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        dataLabels: {
          show: false,
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: ['Assu', 'Abu', 'Futo', 'Ui', "Unilag", "Uniport", "Unn", "Uniuyo", "Unical", "Unizik", "Uniilori", "Uniben", "Delsu", "Ndu", "Rsu", "Imsu", "ESUt", "Lasu"],
      labels: {
        show: true,
        rotate: -90,
      },

      axisBorder: {
        show: true,
        color: '#EDF0F7',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0
      },
    },
    legend: {
      show: false,
    }
  }

  return (
    <ReactApexChart options={options} series={series} type="bar" height={500} />
  );
};
export default BarChart;

