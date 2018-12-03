function AppSettings($http) {
	var service = {
		shopPath: 'https://b8f215b9.ngrok.io'
	}
	var apiUrl = 'https://b8f215b9.ngrok.io';

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