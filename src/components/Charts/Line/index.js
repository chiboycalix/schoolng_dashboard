import React from 'react';
import './styles.scss';
import ReactApexChart from 'react-apexcharts';

const Line = () => {
  const [series, setSeries] = React.useState([{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }]);
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      colors: "#EB5933"
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      show: false,
      row: {
        colors: ['transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    markers: {
      size: 5,
      colors: "#000",
      strokeColors: '#000',
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: 7,
        sizeOffset: 3
      }
    }
  }
  return (<ReactApexChart options={options} series={series} type="line" height={500} />)
}

export default Line