'use strict';

/**
 * @ngdoc function
 * @name fitApp.controller:DashBoardCtrl
 * @description
 * # AboutCtrl
 * Controller of the fitAppApp
 */
angular.module('fitApp')
  .controller('DashBoardCtrl', function ($scope) {
  	/**
  	* Possible values: week, month, year, all
  	*/
  	$scope.selectedOption = 'week';

  	$scope.showWeek = function(){
  		$scope.selectedOption = 'week';
  	};

  	$scope.showMonth = function(){
		$scope.selectedOption = 'month';
  	};

  	$scope.showYear = function(){
		$scope.selectedOption = 'year';
  	};

  	$scope.showAll = function(){
  		$scope.selectedOption = 'all';
  	};

    //This is not a highcharts object. It just looks a little like one!
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
	     data: [2000, 1700, 2435, 1987, 1799, 1600, 2100]
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
	  categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
                             'Saturday'],
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
