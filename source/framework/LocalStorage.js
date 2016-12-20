var LocalStorage = {

	store: {},

	hasStorage: false,

	hasTested: false,
	
	test: function () {
		return LocalStorage.hasStorage = (function() {
			try {
				localStorage.setItem('test', true);
				localStorage.removeItem('test');
				LocalStorage.hasTested = true;
				return true;
			} catch (exception) {
				LocalStorage.hasTested = true;
				return false;
			}
		}());
	},

	get: function (item) {

		if(! LocalStorage.hasTested) {
			if(! LocalStorage.test()) {
				return LocalStorage.store[item];
			}
		}

		return localStorage[item];

	},

	set: function (item, value) {

		if(! LocalStorage.hasTested) {
			if(! LocalStorage.test()) {
				console.error('local sotage supported, failing back to local object');
				LocalStorage.store[item] = value;
				return LocalStorage.store;
			}
		}

		localStorage.setItem(item, value);

	},

	delete: function(item) {

		if(! LocalStorage.hasTested) {
			if(! LocalStorage.test()) {
				console.error('local sotage supported, failing back to local object');
				LocalStorage.store[item] = undefined;
				return LocalStorage.store;
			}
		}

		localStorage.removeItem(item);

	}

}

export default LocalStorage;