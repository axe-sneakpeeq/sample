/* global module:false */
module.exports = function(grunt){
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.name %> */'
		},
		lint: {
			files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
		},
		test: {
			files: ['test/**/*.js']
		},
		
		server: {
			base: '.',
			port: 8000
		},
		
		qunit: {
			all: ['http://localhost:8000/index.html']
		},
		
		uglify: {}
	});
	
	// Default task.
	grunt.registerTask('test', 'server qunit');
	
	grunt.registerTask('default', 'test');
};
