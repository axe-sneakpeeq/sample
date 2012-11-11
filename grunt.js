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
		var done = this.async();
		grunt.log.writeln("Travis Secure Env:" + process.env.TRAVIS_SECURE_ENV_VARS);
		grunt.log.writeln("saucekey:" + process.env.saucekey);
		grunt.log.writeln("github:" + process.env.github);
		
		var request = require('request');
		request({
			url: "https://api.github.com/repos/axe-sneakpeeq/sample/merges?access_token=" + process.env.github,
			method: "POST",
			body: JSON.stringify({
				"base": "gh-pages",
				"head": "master",
				"commit_message": "Passed Travis Build"
			})
		}, function(err, response, body){
			console.log("Error", err);
			console.log("Response", response);
			console.log("Body", body);
			done();
		});
	});
	grunt.registerTask('test1', 'server saucelabs-qunit');
	grunt.registerTask('default', 'test');
};


x = {
	"MAVEN_OPTS": "-Xmx512m -XX:MaxPermSize=192m",
	"LESSOPEN": "| /usr/bin/lesspipe %s",
	"npm_config_cache_lock_stale": "60000",
	"HAS_ANTARES_THREE_LITTLE_FRONZIES_BADGE": "true",
	"npm_config_pre": "",
	"npm_config_sign_git_tag": "",
	"MAIL": "/var/mail/travis",
	"SSH_CLIENT": "10.0.2.2 60111 22",
	"USER": "travis",
	"gvm_pkgset_name": "global",
	"npm_config_always_auth": "",
	"npm_config_user_agent": "node/v0.8.11",
	"CI": "true",
	"TRAVIS_NODE_VERSION": "0.8",
	"GIT_ASKPASS": "echo",
	"npm_config_description": "true",
	"npm_config_fetch_retries": "2",
	"npm_config_init_version": "0.0.0",
	"npm_config_user": "1000",
	"SHLVL": "1",
	"OLDPWD": "/home/travis/builds",
	"HOME": "/home/travis",
	"npm_config_force": "",
	"npm_config_ignore": "",
	"XDG_SESSION_COOKIE": "905dbf9cbfd92f75c33fb133000001a7-1352651856.481739-1718954865",
	"SSH_TTY": "/dev/pts/0",
	"saucekey": "02c94a66-b6f2-421e-9370-0cbc249337e2",
	"NVM_BIN": "/home/travis/.nvm/v0.8.11/bin",
	"npm_package_devDependencies_grunt": "*",
	"npm_package_engines_node": ">=0.6",
	"npm_config_cache_min": "",
	"HAS_JOSH_K_SEAL_OF_APPROVAL": "true",
	"npm_config_editor": "vi",
	"npm_config_rollback": "true",
	"PS1": "",
	"LC_CTYPE": "en_US.UTF-8",
	"npm_config_cache_max": "null",
	"npm_config_userconfig": "/home/travis/.npmrc",
	"GOROOT": "/home/travis/.gvm/gos/go1.0.3",
	"npm_package_keywords_0": "cli",
	"npm_config_coverage": "",
	"npm_config_engine_strict": "",
	"npm_config_init_author_name": "",
	"npm_config_init_author_url": "",
	"npm_config_tmp": "/home/travis/tmp",
	"npm_config_userignorefile": "/home/travis/.npmignore",
	"npm_config_yes": "",
	"JRUBY_OPTS": "--server -Xcext.enabled=false -Xcompile.invokedynamic=false -J-Xss2m -J-Xmx256m -J-XX:+TieredCompilation",
	"npm_package_description": "A sample test applciation",
	"npm_package_scripts_predeploy": "echo This will be run before deploying the app",
	"npm_package_keywords_1": "sample",
	"npm_config_depth": "null",
	"npm_config_save_dev": "",
	"npm_config_usage": "",
	"NVM_PATH": "/home/travis/.nvm/v0.8.11/lib/node",
	"NVM_DIR": "/home/travis/.nvm",
	"npm_config_https_proxy": "",
	"npm_config_onload_script": "",
	"LOGNAME": "travis",
	"npm_config_rebuild_bundle": "true",
	"npm_config_save_bundle": "",
	"npm_config_shell": "/bin/bash",
	"rvm_bin_path": "/home/travis/.rvm/bin",
	"escape_flag": "1",
	"_": "/home/travis/.nvm/v0.8.11/bin/npm",
	"npm_config_prefix": "/home/travis/.nvm/v0.8.11",
	"IRBRC": "/home/travis/.rvm/rubies/ruby-1.9.3-p286/.irbrc",
	"RUBY_VERSION": "ruby-1.9.3-p286",
	"npm_config_registry": "https://registry.npmjs.org/",
	"npm_config_browser": "",
	"npm_config_cache_lock_wait": "10000",
	"npm_config_save_optional": "",
	"npm_config_searchopts": "",
	"npm_config_versions": "",
	"TERM": "xterm",
	"RACK_ENV": "test",
	"npm_config_cache": "/home/travis/.npm",
	"npm_config_proxy": "",
	"npm_package_scripts_start": "grunt",
	"npm_config_npaturl": "http://npat.npmjs.org/",
	"npm_config_searchsort": "name",
	"npm_config_version": "",
	"__array_start": "0",
	"npm_config_viewer": "man",
	"PATH": "/home/travis/.nvm/v0.8.11/bin:/home/travis/.nvm/v0.8.11/lib/node_modules/npm/bin/node-gyp-bin:/home/travis/builds/axe-sneakpeeq/sample/node_modules/.bin:/home/travis/.gvm/pkgsets/go1.0.3/global/bin:/home/travis/.gvm/gos/go1.0.3/bin:/home/travis/.gvm/bin:/home/travis/.gvm/bin:/usr/local/phantomjs/bin:./node_modules/.bin:/home/travis/.gvm/pkgsets/go1.0.3/global/bin:/home/travis/.gvm/gos/go1.0.3/bin:/home/travis/.gvm/bin:/home/travis/.gvm/bin:/usr/local/gradle/bin:/home/travis/.cabal/bin:/home/travis/.rvm/gems/ruby-1.9.3-p286/bin:/home/travis/.rvm/gems/ruby-1.9.3-p286@global/bin:/home/travis/.rvm/rubies/ruby-1.9.3-p286/bin:/home/travis/.rvm/bin:/usr/local/phantomjs/bin:/home/travis/.nvm/v0.8.11/bin:./node_modules/.bin:/home/travis/.gvm/pkgsets/go1.0.3/global/bin:/home/travis/.gvm/gos/go1.0.3/bin:/home/travis/.gvm/bin:/home/travis/.gvm/bin:/usr/local/gradle/bin:/home/travis/.cabal/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/opt/ruby/bin/:/opt/ruby/bin/:/home/travis/.rvm/bin",
	"MERB_ENV": "test",
	"npm_package_name": "sample",
	"npm_package_repository_type": "git",
	"_first": "0",
	"npm_package_scripts_postdeploy": "echo This will be run after deploying the app",
	"npm_config_color": "true",
	"MY_RUBY_HOME": "/home/travis/.rvm/rubies/ruby-1.9.3-p286",
	"TRAVIS": "true",
	"npm_config_fetch_retry_mintimeout": "10000",
	"LANG": "en_US.UTF-8",
	"npm_config_umask": "18",
	"LS_COLORS": "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lz=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.axa=00;36:*.oga=00;36:*.spx=00;36:*.xspf=00;36:",
	"TRAVIS_SECURE_ENV_VARS": "true",
	"npm_config_fetch_retry_maxtimeout": "60000",
	"npm_config_loglevel": "http",
	"npm_config_message": "%s",
	"npm_lifecycle_script": "grunt test",
	"GVM_VERSION": "1.0.15",
	"DEBIAN_FRONTEND": "noninteractive",
	"npm_package_bin_grunt": "./bin/grunt",
	"npm_package_scripts_test": "grunt test",
	"npm_config_global": "",
	"npm_config_link": "",
	"SHELL": "/bin/bash",
	"GOPATH": "/home/travis/.gvm/pkgsets/go1.0.3/global",
	"TRAVIS_JOB_ID": "3151117",
	"npm_package_version": "0.3.0",
	"npm_package_repository_url": "https://github.com/axe-sneakpeeq/sample.git",
	"npm_config_save": "",
	"npm_config_unicode": "true",
	"npm_lifecycle_event": "test",
	"rvm_prefix": "/home/travis",
	"_second": "1",
	"npm_package_devDependencies_grunt_saucelabs_qunit": "*",
	"npm_config_argv": "{\"remain\":[],\"cooked\":[\"test\"],\"original\":[\"test\"]}",
	"npm_config_long": "",
	"npm_config_production": "",
	"npm_config_unsafe_perm": "true",
	"GEM_HOME": "/home/travis/.rvm/gems/ruby-1.9.3-p286",
	"github": "7c4ae7b56d406ddd953be1d6e5eb9e47f89bb5d6",
	"LESSCLOSE": "/usr/bin/lesspipe %s %s",
	"npm_package_devDependencies_request": "*",
	"npm_config_node_version": "v0.8.11",
	"npm_config_tag": "latest",
	"TRAVIS_PULL_REQUEST": "false",
	"RAILS_ENV": "test",
	"gvm_go_name": "go1.0.3",
	"rvm_version": "1.16.14 (latest-1.16)",
	"npm_package_license": "MIT",
	"npm_package_readme": "\"Sample Project\\n==============\\n\\nThis is a sample project that demonstrates the use of the grunt-saucelabs-qunit plugin. \\n\\nBuild status is \\n\\n[![Build Status](https://secure.travis-ci.org/axe-sneakpeeq/sample.png?branch=master)](https://travis-ci.org/axe-sneakpeeq/sample)\"",
	"npm_config_fetch_retry_factor": "10",
	"npm_config_npat": "",
	"npm_config_proprietary_attribs": "true",
	"npm_config_strict_ssl": "true",
	"npm_config_username": "",
	"npm_config_dev": "",
	"npm_config_globalconfig": "/home/travis/.nvm/v0.8.11/etc/npmrc",
	"npm_config_init_module": "/home/travis/.npm-init.js",
	"npm_config_parseable": "",
	"LC_ALL": "en_US.UTF-8",
	"PWD": "/home/travis/builds/axe-sneakpeeq/sample",
	"JAVA_HOME": "/usr/lib/jvm/java-7-oracle",
	"GEM_PATH": "/home/travis/.rvm/gems/ruby-1.9.3-p286:/home/travis/.rvm/gems/ruby-1.9.3-p286@global",
	"npm_config_globalignorefile": "/home/travis/.nvm/v0.8.11/etc/npmignore",
	"GVM_ROOT": "/home/travis/.gvm",
	"SSH_CONNECTION": "10.0.2.2 60111 10.0.2.15 22",
	"npm_package_author_name": "Sample",
	"npm_config_cache_lock_retries": "10",
	"TZ": "UTC",
	"npm_config_group": "1000",
	"npm_config_init_author_email": "",
	"npm_config_searchexclude": "",
	"MANPATH": "/home/travis/.nvm/v0.8.11/share/man:",
	"rvm_path": "/home/travis/.rvm",
	"GVM_PATH_BACKUP": "/home/travis/.gvm/bin:/usr/local/phantomjs/bin:./node_modules/.bin:/home/travis/.gvm/pkgsets/go1.0.3/global/bin:/home/travis/.gvm/gos/go1.0.3/bin:/home/travis/.gvm/bin:/home/travis/.gvm/bin:/usr/local/gradle/bin:/home/travis/.cabal/bin:/home/travis/.rvm/gems/ruby-1.9.3-p286/bin:/home/travis/.rvm/gems/ruby-1.9.3-p286@global/bin:/home/travis/.rvm/rubies/ruby-1.9.3-p286/bin:/home/travis/.rvm/bin:/usr/local/phantomjs/bin:/home/travis/.nvm/v0.6.21/bin:./node_modules/.bin:/home/travis/.gvm/pkgsets/go1.0.3/global/bin:/home/travis/.gvm/gos/go1.0.3/bin:/home/travis/.gvm/bin:/home/travis/.gvm/bin:/usr/local/gradle/bin:/home/travis/.cabal/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/opt/ruby/bin/:/opt/ruby/bin/",
	"npm_config_git": "git",
	"npm_config_optional": "true",
	"npm_config_json": ""
}
