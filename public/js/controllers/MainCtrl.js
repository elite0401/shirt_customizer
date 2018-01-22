angular.module('MainCtrl', []).controller('MainController', function($scope, AppSettings) {

	var vm = this;

	$scope.baseUrl = 'https://f784a8cb.ngrok.io/';
	console.log('main controller.....');

	$scope.qualityStepShown = true;
	$scope.fabricStepShown = false;
	$scope.designStepShown = false;
	$scope.measureStepShown = false;

	$scope.qualityStepView = false;
	$scope.fabricStepView = false;
	$scope.designStepView = false;
	$scope.measureStepView = false;

	$scope.stepCollar = false;
	$scope.stepCuffs = false;
	$scope.stepFront = false;
	$scope.stepBack = false;
	$scope.stepButtons = false;
	$scope.stepExtras = false;

	$scope.styleView = 'Collar';

	$scope.valQuality = 'starter';
	$scope.valFabric = {};
	$scope.valDesign = {
		collar_style: '',
		collar_height: '',
		collar_stiffness: '',
		cuff_preferance: '',
		cuff_sleeve_tab_buttons: '',
		cuff_pleats: '',
		front_pocket: '',
		front_pocket_style: '',
		back_pleats: '',
		back_tail: '',
		back_tail_length: '',
		back_yoke: '',
		buttons_button: '',
		buttons_stitching_style: ''
	};

	$scope.scBarConfig = {
		autoHideScrollbar: false,
		theme: 'rounded-dark',
		scrollButtons: false,
		advanced:{
			updateOnContentResize: true
		},
		setHeight: 400,
		scrollInertia: 0
	};

	$scope.goNextStep = function() {
		if ($scope.qualityStepView || (!$scope.fabricStepView && !$scope.designStepView && !$scope.measureStepView)) {
			$scope.toggleFabricStep();
		} else if ($scope.fabricStepView) {
			$scope.toggleDesignStep();
		} else if ($scope.designStepView) {
			$scope.toggleMeasureStep();
		}
	};

	$scope.toggleQualityStep = function() {
		$scope.qualityStepShown = true;

		$scope.qualityStepView = true;

		$scope.fabricStepView = false;
		$scope.designStepView = false;
		$scope.measureStepView = false;
	};

	$scope.toggleFabricStep = function() {
		$scope.fabricStepShown = true;

		$scope.fabricStepView = true;

		$scope.qualityStepView = false;
		$scope.designStepView = false;
		$scope.measureStepView = false;
	};

	$scope.toggleDesignStep = function() {

		$scope.designStepShown = true;

		$scope.designStepView = true;
		$scope.stepCollar = true;

		$scope.fabricStepView = false;
		$scope.qualityStepView = false;
		$scope.measureStepView = false;
	};

	$scope.toggleMeasureStep = function() {
		$scope.measureStepShown = true;

		$scope.measureStepView = true;

		$scope.qualityStepView = false;
		$scope.fabricStepView = false;
		$scope.designStepView = false;

		$scope.styleView = 'Collar';
		console.log($scope.valDesign);
	};

	$scope.toggleStyleStep = function(step) {
		$scope.styleView = step;
		switch (step) {
			case 'Collar':
				$scope.stepCollar = true;
				break;
			case 'Cuffs':
				$scope.stepCuffs = true;
				break;
			case 'Front':
				$scope.stepFront = true;
				break;
			case 'Back':
				$scope.stepBack = true;
				break;
			case 'Buttons':
				$scope.stepButtons = true;
				break;
			case 'Extras':
				$scope.stepExtras = true;
				break;
			default:
				break;
		}
	}

	$scope.selectQuality = function(quality) {
		$scope.valQuality = quality;
	};

	$scope.selectFabric = function(fabric) {
		$scope.valFabric = fabric;
	};

	$scope.loadFabrics = function(filter, sort) {
		AppSettings.getFabric(filter, sort)
			.success(function(fabrics) {
				$scope.fabrics = fabrics.result;
			})
			.error(function(err) {
				console.log(err);
			});
	};

	$scope.loadFabrics(null, null);
});