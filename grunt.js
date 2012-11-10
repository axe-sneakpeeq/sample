/* global module:false */
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
				username: 'parashu',
				key: '0ffbc62b-98ba-4644-a33d-eeb2ed56047d',
				urls: ['http://127.0.0.1:9999/index.html'],
				tunnelTimeout: 5,
				browsers: [{
					browserName: 'opera'
				}, {
					browserName: 'safari',
					platform: 'Mac 10.6',
					version: '5'
				}]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-saucelabs-qunit');
	
	
	grunt.registerTask('test', function(){
		grunt.log.writeln(proc.env.TRAVIS_SECURE_ENV_VARS);
		grunt.log.writeln(proc.env.axe);
	});
	grunt.registerTask('test1', 'server saucelabs-qunit');
	grunt.registerTask('default', 'test');
};
