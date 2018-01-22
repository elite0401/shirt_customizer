function AppSettings($http) {
	var service = {
		shopPath: 'https://f784a8cb.ngrok.io'
	}
	var apiUrl = 'https://f784a8cb.ngrok.io';

	service.getFabric = function(filter, sort) {
		console.log(apiUrl);
		var fabricUrl = apiUrl + '/fabrics?';
		if (filter) {
			fabricUrl += 'filter=' + filter + '&';
		}
		if (sort) {
			fabricUrl += 'sort=' + sort;
		}
		return $http.get(fabricUrl);
	}
    return service;
}