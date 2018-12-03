angular.module('MainCtrl', []).controller('MainController', function($scope, AppSettings) {

	var vm = this;

	$scope.baseUrl = 'https://b8f215b9.ngrok.io/';
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
	$scope.measureView = '';

	$scope.valQuality = 'starter';
	$scope.valFabric = {};
	$scope.valDesign = {
		collar_style: 'classic collar',
		collar_height: 'standard',
		collar_stiffness: 'standard',
		cuff_preferance: 'one button square cuff',
		cuff_sleeve_tab_options: 'button',
		cuff_pleats: 'two pleat',
		front_pocket: 'no pocket',
		front_pocket_style: 'rounded',
		front_placket: 'standard placket',
		back_pleats: 'no pleats',
		back_tail: 'standard',
		buttons_button: 'sp01',
		extra_monogram_style: 'none',
		extra_monogram_location: 'left cuff',
		extra_monogram_color: '1801',
		extra_monogram_letters: '',
		extra_contrast_collar_cuff: 'none',
		extra_contrast_collar_cuff_fabric: 'white',
		extra_buton_thread_style: 'x style',
		extra_button_stitch_color: '1801',
		extra_tuxedo_bib: 'no bib'
	};

	$scope.valMeasure = {
		
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
		$scope.measureView = '';

		console.log($scope.valDesign);
	};

	$scope.toggleMeasureView = function(view) {
		$scope.measureView = view;

		$scope.qualityStepView = false;
		$scope.fabricStepView = false;
		$scope.designStepView = false;
		$scope.measureStepView = false;
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