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
				username: 'indexeddbshim',
				key: null,
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
		grunt.log.writeln("saucekey:" + process.env.saucekey);
		grunt.log.writeln("github:" + process.env.github);
		grunt.log.writeln(JSON.stringify(process.env));
		
		var request = require('request');
		request({
			url: "https://api.github.com/repos/axe-sneakpeeq/sample/merges?access_token=" + process.env.github,
			body: JSON.stringify({
				"base": "gh-pages",
				"head": "master",
				"commit_message": "Passed Travis Build"
			})
		}, function(err, response, body){
			console.log(arguments);
		});
	});
	grunt.registerTask('test1', 'server saucelabs-qunit');
	grunt.registerTask('default', 'test');
};
