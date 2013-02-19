var utils = require('partial.js/utils');


exports.onLoaded = function (framework) {

	framework.helpers.now = function() {
		return new Date().format('dd.MM.yyyy HH:mm:ss');
	};

	framework.helpers.say = function(what, raw) {
		raw = raw || false;
		if (!raw)
			return what.toString().htmlEncode();
		return what;
	};
	
	framework.helpers.greeting = 'Hello World!';
};