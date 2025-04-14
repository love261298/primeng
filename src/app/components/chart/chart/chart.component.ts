import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  basicData: any;
  basicOptions: any;
  data: any;
  options: any;
  dataCombo: any;
  optionsCombo: any;
  dataRadar: any;
  optionsRadar: any;
  dataPolarArea: any;
  optionsPolarArea: any;
  dataLineStyles: any;
  optionsLineStyles: any;
  dataMultiAxis: any;
  optionsMultiAxis: any;
  dataLine: any;
  optionsLine: any;
  dataStacked: any;
  optionsStacked: any;
  dataHorizontal: any;
  optionsHorizontal: any;
  dataVertical: any;
  optionsVertical: any;
  dataDoughnut: any;
  optionsDoughnut: any;
  ngOnInit() {
    //==>
    const documentStyleCombo = getComputedStyle(document.documentElement);
    const textColorCombo = documentStyleCombo.getPropertyValue('--text-color');
    const textColorSecondaryCombo = documentStyleCombo.getPropertyValue('--text-color-secondary');
    const surfaceBorderCombo = documentStyleCombo.getPropertyValue('--surface-border');

    this.dataCombo = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: documentStyleCombo.getPropertyValue('--blue-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [50, 25, 12, 48, 56, 76, 42]
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: documentStyleCombo.getPropertyValue('--green-500'),
          data: [21, 84, 24, 75, 37, 65, 34],
          borderColor: 'white',
          borderWidth: 2
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: documentStyleCombo.getPropertyValue('--orange-500'),
          data: [41, 52, 24, 74, 23, 21, 32]
        }
      ]
    };

    this.optionsCombo = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColorCombo
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondaryCombo
          },
          grid: {
            color: surfaceBorderCombo
          }
        },
        y: {
          ticks: {
            color: textColorSecondaryCombo
          },
          grid: {
            color: surfaceBorderCombo
          }
        }
      }
    };
    //<==
    //==>
    const documentStyleRadar = getComputedStyle(document.documentElement);
    const textColorRadar = documentStyleRadar.getPropertyValue('--text-color');
    const textColorSecondaryRadar = documentStyleRadar.getPropertyValue('--text-color-secondary');

    this.dataRadar = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'My First dataset',
          borderColor: documentStyleRadar.getPropertyValue('--bluegray-400'),
          pointBackgroundColor: documentStyleRadar.getPropertyValue('--bluegray-400'),
          pointBorderColor: documentStyleRadar.getPropertyValue('--bluegray-400'),
          pointHoverBackgroundColor: textColorRadar,
          pointHoverBorderColor: documentStyleRadar.getPropertyValue('--bluegray-400'),
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          borderColor: documentStyleRadar.getPropertyValue('--pink-400'),
          pointBackgroundColor: documentStyleRadar.getPropertyValue('--pink-400'),
          pointBorderColor: documentStyleRadar.getPropertyValue('--pink-400'),
          pointHoverBackgroundColor: textColorRadar,
          pointHoverBorderColor: documentStyleRadar.getPropertyValue('--pink-400'),
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };

    this.optionsRadar = {
      plugins: {
        legend: {
          labels: {
            color: textColorRadar
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondaryRadar
          },
          pointLabels: {
            color: textColorSecondaryRadar
          }
        }
      }
    };
    //<==
    //===>
    const documentStylePolarArea = getComputedStyle(document.documentElement);
    const textColorPolarArea = documentStylePolarArea.getPropertyValue('--text-color');
    const surfaceBorderPolarArea = documentStylePolarArea.getPropertyValue('--surface-border');

    this.dataPolarArea = {
      datasets: [
        {
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            documentStylePolarArea.getPropertyValue('--red-500'),
            documentStylePolarArea.getPropertyValue('--green-500'),
            documentStylePolarArea.getPropertyValue('--yellow-500'),
            documentStylePolarArea.getPropertyValue('--bluegray-500'),
            documentStylePolarArea.getPropertyValue('--blue-500')
          ],
          label: 'My dataset'
        }
      ],
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
    };

    this.optionsPolarArea = {
      plugins: {
        legend: {
          labels: {
            color: textColorPolarArea
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: surfaceBorderPolarArea
          }
        }
      }
    };
    //<===
    //===>
    const documentStyleLineStyles = getComputedStyle(document.documentElement);
    const textColorLineStyles = documentStyleLineStyles.getPropertyValue('--text-color');
    const textColorSecondaryLineStyles = documentStyleLineStyles.getPropertyValue('--text-color-secondary');
    const surfaceBorderLineStyles = documentStyleLineStyles.getPropertyValue('--surface-border');

    this.dataLineStyles = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          borderColor: documentStyleLineStyles.getPropertyValue('--blue-500')
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyleLineStyles.getPropertyValue('--teal-500')
        },
        {
          label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: documentStyleLineStyles.getPropertyValue('--orange-500'),
          tension: 0.4,
          backgroundColor: 'rgba(255,167,38,0.2)'
        }
      ]
    };

    this.optionsLineStyles = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColorLineStyles
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondaryLineStyles
          },
          grid: {
            color: surfaceBorderLineStyles
          }
        },
        y: {
          ticks: {
            color: textColorSecondaryLineStyles
          },
          grid: {
            color: surfaceBorderLineStyles
          }
        }
      }
    };
    //<===
    //===>
    const documentStyleMultiAxis = getComputedStyle(document.documentElement);
    const textColorMultiAxis = documentStyleMultiAxis.getPropertyValue('--text-color');
    const textColorSecondaryMultiAxis = documentStyleMultiAxis.getPropertyValue('--text-color-secondary');
    const surfaceBorderMultiAxis = documentStyleMultiAxis.getPropertyValue('--surface-border');

    this.dataMultiAxis = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          fill: false,
          borderColor: documentStyleMultiAxis.getPropertyValue('--blue-500'),
          yAxisID: 'y',
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10]
        },
        {
          label: 'Dataset 2',
          fill: false,
          borderColor: documentStyleMultiAxis.getPropertyValue('--green-500'),
          yAxisID: 'y1',
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.optionsMultiAxis = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColorMultiAxis
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondaryMultiAxis
          },
          grid: {
            color: surfaceBorderMultiAxis
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: textColorSecondaryMultiAxis
          },
          grid: {
            color: surfaceBorderMultiAxis
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: textColorSecondaryMultiAxis
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorderMultiAxis
          }
        }
      }
    };
    //<===
    //===>
    const documentStyleLine = getComputedStyle(document.documentElement);
    const textColorLine = documentStyleLine.getPropertyValue('--text-color');
    const textColorSecondaryLine = documentStyleLine.getPropertyValue('--text-color-secondary');
    const surfaceBorderLine = documentStyleLine.getPropertyValue('--surface-border');

    this.dataLine = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyleLine.getPropertyValue('--blue-500'),
          tension: 0.4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyleLine.getPropertyValue('--pink-500'),
          tension: 0.4
        }
      ]
    };

    this.optionsLine = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColorLine
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondaryLine
          },
          grid: {
            color: surfaceBorderLine,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondaryLine
          },
          grid: {
            color: surfaceBorderLine,
            drawBorder: false
          }
        }
      }
    };
    //<===
    //===>
    const documentStyleStacked = getComputedStyle(document.documentElement);
    const textColorStacked = documentStyleStacked.getPropertyValue('--text-color');
    const textColorSecondaryStacked = documentStyleStacked.getPropertyValue('--text-color-secondary');
    const surfaceBorderStacked = documentStyleStacked.getPropertyValue('--surface-border');

    this.dataStacked = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: documentStyleStacked.getPropertyValue('--blue-500'),
          data: [50, 25, 12, 48, 90, 76, 42]
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: documentStyleStacked.getPropertyValue('--green-500'),
          data: [21, 84, 24, 75, 37, 65, 34]
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: documentStyleStacked.getPropertyValue('--yellow-500'),
          data: [41, 52, 24, 74, 23, 21, 32]
        }
      ]
    };

    this.optionsStacked = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        },
        legend: {
          labels: {
            color: textColorStacked
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondaryStacked
          },
          grid: {
            color: surfaceBorderStacked,
            drawBorder: false
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondaryStacked
          },
          grid: {
            color: surfaceBorderStacked,
            drawBorder: false
          }
        }
      }
    };
    //<===
    //===>
    const documentStyleHorizontal = getComputedStyle(document.documentElement);
    const textColorHorizontal = documentStyleHorizontal.getPropertyValue('--text-color');
    const textColorSecondaryHorizontal = documentStyleHorizontal.getPropertyValue('--text-color-secondary');
    const surfaceBorderHorizontal = documentStyleHorizontal.getPropertyValue('--surface-border');

    this.dataHorizontal = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyleHorizontal.getPropertyValue('--blue-500'),
          borderColor: documentStyleHorizontal.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: documentStyleHorizontal.getPropertyValue('--pink-500'),
          borderColor: documentStyleHorizontal.getPropertyValue('--pink-500'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.optionsHorizontal = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColorHorizontal
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondaryHorizontal,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorderHorizontal,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondaryHorizontal
          },
          grid: {
            color: surfaceBorderHorizontal,
            drawBorder: false
          }
        }
      }
    };
    //<===
    //===>
    const documentStyleVertical = getComputedStyle(document.documentElement);
    const textColorVertical = documentStyleVertical.getPropertyValue('--text-color');
    const textColorSecondaryVertical = documentStyleVertical.getPropertyValue('--text-color-secondary');
    const surfaceBorderVertical = documentStyleVertical.getPropertyValue('--surface-border');

    this.dataVertical = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyleVertical.getPropertyValue('--blue-500'),
          borderColor: documentStyleVertical.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: documentStyleVertical.getPropertyValue('--pink-500'),
          borderColor: documentStyleVertical.getPropertyValue('--pink-500'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.optionsVertical = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColorVertical
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondaryVertical,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorderVertical,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondaryVertical
          },
          grid: {
            color: surfaceBorderVertical,
            drawBorder: false
          }
        }

      }
    };
    //<====
    //===>
    const documentStyleDoughnut = getComputedStyle(document.documentElement);
    const textColorDoughnut = documentStyleDoughnut.getPropertyValue('--text-color');

    this.dataDoughnut = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [documentStyleDoughnut.getPropertyValue('--blue-500'), documentStyleDoughnut.getPropertyValue('--yellow-500'), documentStyleDoughnut.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyleDoughnut.getPropertyValue('--blue-400'), documentStyleDoughnut.getPropertyValue('--yellow-400'), documentStyleDoughnut.getPropertyValue('--green-400')]
        }
      ]
    };


    this.optionsDoughnut = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColorDoughnut
          }
        }
      }
    };
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
    const documentStyleBasic = getComputedStyle(document.documentElement);
    const textColorBasic = documentStyleBasic.getPropertyValue('--text-color');
    const textColorSecondary = documentStyleBasic.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyleBasic.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColorBasic
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
}
