angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.baseUrl = 'https://3b6f713d.ngrok.io/';
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
	$scope.fabrics = [
		{'id': 1, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/1.png'},
		{'id': 2, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/2.png'},
		{'id': 3, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/3.png'},
		{'id': 4, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/4.png'},
		{'id': 5, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/5.png'},
		{'id': 6, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/6.png'},
		{'id': 7, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/7.png'},
		{'id': 8, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/8.png'},
		{'id': 9, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/9.png'},
		{'id': 10, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/10.png'},
		{'id': 11, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/11.png'},
		{'id': 12, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/12.png'},
		{'id': 13, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/13.png'},
		{'id': 14, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/14.png'},
		{'id': 15, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/15.png'},
		{'id': 16, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/16.png'},
		{'id': 17, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/17.png'},
		{'id': 18, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/18.png'},
		{'id': 19, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/19.png'},
		{'id': 20, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/20.png'},
		{'id': 21, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/21.png'},
		{'id': 22, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/22.png'},
		{'id': 23, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/23.png'},
		{'id': 24, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/24.png'},
		{'id': 25, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/21.png'},
		{'id': 26, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/22.png'},
		{'id': 27, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/23.png'},
		{'id': 28, 'name': 'Hudson White Wrinkle-Resistant Twill', 'image': $scope.baseUrl + 'assets/img/placeholder/fabric/24.png'}
	];

	$scope.goNextStep = function() {
		if ($scope.qualityStepView || (!$scope.fabricStepView && !$scope.designStepView && !$scope.measureStepView)) {
			$scope.toggleFabricStep();
		} else if ($scope.fabricStepView) {
			$scope.toggleDesignStep();
		} else if ($scope.designStepView) {
			$scope.toggleMeasureStep();
		}
	}

	$scope.toggleQualityStep = function() {
		$scope.qualityStepShown = true;

		$scope.qualityStepView = true;

		$scope.fabricStepView = false;
		$scope.designStepView = false;
		$scope.measureStepView = false;
	}

	$scope.toggleFabricStep = function() {
		$scope.fabricStepShown = true;

		$scope.fabricStepView = true;

		$scope.qualityStepView = false;
		$scope.designStepView = false;
		$scope.measureStepView = false;
	}

	$scope.toggleDesignStep = function() {
		$scope.designStepShown = true;

		$scope.designStepView = true;
		$scope.stepCollar = true;

		$scope.fabricStepView = false;
		$scope.qualityStepView = false;
		$scope.measureStepView = false;
	}

	$scope.toggleMeasureStep = function() {
		$scope.measureStepShown = true;

		$scope.measureStepView = true;

		$scope.qualityStepView = false;
		$scope.fabricStepView = false;
		$scope.designStepView = false;

		$scope.styleView = 'Collar';
	}

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
	}
});