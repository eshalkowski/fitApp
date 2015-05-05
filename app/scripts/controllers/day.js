'use strict';

/**
 * @ngdoc function
 * @name fitAppApp.controller:DayCtrl
 * @description
 * # MainCtrl
 * Controller of the fitApp
 */
angular.module('fitApp')
  .controller('DayCtrl', function ($scope) {
  	$scope.chartType = 'area'
  	$scope.setChartType = function(type){
		$scope.stepsConfig.options.chart.type = type;
		$scope.$applyAsync();
  	};

  	$scope.stepsConfig = {

	  options: {
	      //This is the Main Highcharts chart config. Any Highchart options are valid here.
	      //will be overriden by values specified below.
	      chart: {
	          type: 'area'
	      },
	      tooltip: {
	          style: {
	              padding: 10,
	              fontWeight: 'bold'
	          }
	      },
	      legend: {
	      	enabled: false
	      }
	  },
	  //The below properties are watched separately for changes.

	  //Series object (optional) - a list of series using normal highcharts series options.
	  series: [{
	     data: [10,20,15,35,40,42,41,40,10,5,0,0,5,5,10,15,15,15,16,16,29,50,100,100,110,115,85,50,20,20,5,9,15,5,15,4,3,0,0,0,0,0,0,0,0,0,0,0,0]
	  }],
	  //Title configuration (optional)
	  title: {
	     text: ''
	  },
	  //Boolean to control showng loading status on chart (optional)
	  //Could be a string if you want to show specific loading text.
	  loading: false,
	  //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
	  //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
	  
	  xAxis: {
	  categories: [],
	  	  title: {text: 'Day'}
	  },
	  yAxis: {
	 
	  	  title: {text: 'Steps Taken'}
	  },
	  //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
	  useHighStocks: false,
	  //size (optional) if left out the chart will default to size of the div or something sensible.
	  size: {
	   height: 300
	  },
	  //function (optional)
	  func: function (chart) {
	   //setup some logic for the chart
	  }
	};
  });
