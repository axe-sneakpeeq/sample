/* global module:false */

var sauceKey = null;
if (process.env.TRAVIS_PULL_REQUEST && process.env.TRAVIS_SECURE_ENV_VARS) {
	sauceKey = process.env.sauceKey;
}
module.exports = function(grunt){
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.name %> */'
		},
		server: {
			base: '.',
			port: 9999
		},
		
		qunit: {
			all: ['http://127.0.0.1:9999/index.html']
		},
		
		'saucelabs-qunit': {
			all: {
				username: 'indexeddbshim',
				key: sauceKey,
				urls: ['http://127.0.0.1:9999/index.html'],
				tunnelTimeout: 5,
				browsers: [{
					browserName: 'opera'
				}]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-saucelabs-qunit');
	
	
	grunt.registerTask('test', function(){
		grunt.log.writeln("Travis Secure Env:" + process.env.TRAVIS_SECURE_ENV_VARS);
		grunt.log.writeln("saucekey:" + process.env.sauceKey);
	});
	grunt.registerTask('test1', 'server saucelabs-qunit');
	grunt.registerTask('default', 'test');
};
