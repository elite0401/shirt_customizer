function DirectiveModal(AppSettings) {
	return {
	    restrict: 'E',
	    scope: {
	      show: '='
	    },
	    replace: true, // Replace with the template below
	    transclude: true, // we want to insert custom content inside the directive
	    link: function(scope, element, attrs) {
	      scope.dialogStyle = {};
	      if (attrs.width)
	        scope.dialogStyle.width = attrs.width;
	      if (attrs.height)
	        scope.dialogStyle.height = attrs.height;
	      scope.hideModal = function() {
	        scope.show = false;
	      };
	    },
	    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
	};
}

function DirectiveRangeSpinner(AppSettings) {
	return {
			restrict : 'AE',
			scope : {
				rangeMin:"@",
				rangeStep:"@",
				rangeMax:"@",
				rangeDefaultValue:"@",
				acceptDecimal:"@",
				rangeModel:"=",
				nameOfField:"@",
				idOfField:"@",
				rangeDecimalPrecision:"@",
				disabled:"="
			},
			template : '<div class="rangespinner"><div ng-class="{disable: disabled}"><button type="button" ng-disabled="{{disabled}}" ng-click="rangeMinusFunc()">-</button><input name="{{nameOfField}}" id="{{idOfField}}" type="text" range-min="{{rangeMin}}" ng-disabled="{{disabled}}" range-step="{{rangeStep}}" range-max="{{rangeMax}}" ng-model="rangeModel" required><button type="button" ng-disabled="{{disabled}}" ng-click="rangePlusFunc()">+</button></div></div>',
			controller : function($scope,$element,$attrs) {
				
				//Initializing minRange, step and maxRange with default Value if not provided.
				$scope.minRange = +(angular.isDefined($attrs.rangeMin)?$attrs.rangeMin:0);
				$scope.step = +(angular.isDefined($attrs.rangeStep)?$attrs.rangeStep:0);
				$scope.maxRange = +(angular.isDefined($attrs.rangeMax)?$attrs.rangeMax:100);
				$scope.rangeDecPrec = +(angular.isDefined($attrs.rangeDecimalPrecision)?$attrs.rangeDecimalPrecision:1);

				//Initializing rangeModel with default Value if supplied rangeDefaultValue is not between minRange and maxRange.
				if(angular.isDefined($scope.rangeDefaultValue) && !isNaN($scope.rangeDefaultValue)){
					var rangeDefaultVal = parseFloat($scope.rangeDefaultValue);
					if(rangeDefaultVal >= $scope.minRange && rangeDefaultVal <= $scope.maxRange){
						$scope.rangeModel = parseFloat($scope.rangeDefaultValue).toFixed($scope.rangeDecPrec);
					}else{
						$scope.rangeModel = parseFloat($scope.minRange).toFixed($scope.rangeDecPrec);
					}
				}
					
				//Plus Button Method
				$scope.rangePlusFunc = function() {
					if (angular.isUndefined($scope.rangeModel) || isNaN($scope.rangeModel) || $scope.rangeModel===""){
						$scope.rangeModel = $scope.minRange;
					}else{	
						if ($scope.rangeModel < $scope.maxRange) {
							if($scope.acceptDecimal == 'true'){
								$scope.rangeModel = (parseFloat(parseFloat($scope.rangeModel) + parseFloat($scope.step))).toFixed($scope.rangeDecPrec);
							}else{
								$scope.rangeModel = (parseInt(parseInt($scope.rangeModel) + parseInt($scope.step)));
							}
						}
					}
				};

				//Minus Button Method
				$scope.rangeMinusFunc = function() {
					if (angular.isUndefined($scope.rangeModel) || isNaN($scope.rangeModel) || $scope.rangeModel===""){
						$scope.rangeModel = $scope.minRange;
					}else{
						if ($scope.rangeModel > $scope.minRange) {
							if($scope.acceptDecimal == 'true'){
								$scope.rangeModel = (parseFloat(parseFloat($scope.rangeModel) - parseFloat($scope.step))).toFixed($scope.rangeDecPrec);
							}else{
								$scope.rangeModel = (parseInt(parseInt($scope.rangeModel) - parseInt($scope.step)));
							}
						}
					}
				};
					
				//For Direct Editing
				$scope.$watch(function(){
					return $scope.rangeModel;
				}, function(newvalue, oldvalue){
					
					if(angular.isDefined($scope.rangeModel)){
						if (!isNaN($scope.rangeModel)){
							if ($scope.rangeModel > $scope.maxRange){
								$scope.rangeModel = $scope.maxRange;
							}else if ($scope.rangeModel < $scope.minRange){
								$scope.rangeModel = $scope.minRange;
							}else{
								
								if($scope.acceptDecimal == 'true'){
									var precision = String($scope.rangeModel).split(".");
									if(precision.length>1 && precision[1].length>$scope.rangeDecPrec){
										$scope.rangeModel = (parseFloat($scope.rangeModel)).toFixed($scope.rangeDecPrec);
									}
								}else{
									$scope.rangeModel = parseInt($scope.rangeModel);
								}
							}
						}else{
							$scope.rangeModel = oldvalue;
						}
					}
				},true);
			}
		};
}