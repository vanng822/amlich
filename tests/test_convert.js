var assert = require('assert');


var vows = require('vows');

amlich = require('../index.js');

vows.describe('Test suite for calc').addBatch({
	'Given 2013-05-04 in Julian get 2013-03-25 in Lunar calendar with not leap year' : function() {
		assert.deepEqual( amlich.convertSolar2Lunar(4, 5, 2013, 1), [ 25, 3, 2013, 0 ]);
	},
	'Given 2013-01-21 in Lunar get 2013-03-02 in Julian calendar' : function() {
		assert.deepEqual(amlich.convertLunar2Solar(21, 1, 2013, 0, 1), [ 2, 3, 2013]);
	}
}).export(module);
