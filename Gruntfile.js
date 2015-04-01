module.exports = function(grunt) {
	grunt.initConfig({
		// Gathers information from package.json
		pkg: grunt.file.readJSON('package.json'),
		// JSHINT - Checks javascript for errors
		jshint: {
			PreUglify: ['script.js'],
			PostUglify: ['build/js/script.min.js']
	  },
		// UGLIFY - compresses javascript
		uglify: {                            // Task 
    	my_target: {                       // Target 
    		options: {                       // Target options 
  				sourceMap: 'build/js/script.min.js.map',
  				banner: '/* Script created by Jason Swingen */',
  				mangle: false
    		},
    	  files: {                         // Dictionary of files 
      	  'build/js/script.min.js': 'script.js'     // 'destination': 'source' 
      	}
      }
   	},
		// SASS - compiles scss files
		sass: {                              // Task 
			dist: {                            // Target 
			  options: {                       // Target options 
			  	loadPath: require('node-bourbon').includePaths,
			  	loadPath: require('node-neat').includePaths,
			    style: 'compressed'
			  },
			  files: {                         // Dictionary of files 
			    'build/css/styles.css': 'style.scss'     // 'destination': 'source' 
			  }
			}
		},
		//JEKYLL - Builds site and runs a jekyll server
	  jekyll: {  
	  	server: {
	  		source: '/',
	  		destination: '/_gruntsite',
	  		server: 'true',
	  		server_port: 4000,
	  		auto: 'true'
	  	},                         // Task 
	    options: {                          // Universal options 
	      bundleExec: true,
	      source : '<%= app %>'
	    },
	    dist: {                             // Target 
	      options: {                        // Target options 
	        destination: '<%= dist %>',
	        config: '_config.yml,_config.build.yml'
	      }
	    },
	    serve: {                            // Another target 
	      options: {
	        destination: '.jekyll',
	        drafts: true
	      }
	    }
	  },
	 	// WATCH - watches files for changes
	  watch: {                             // Task 
		  js: {
		    files: ['script.js'],
		    tasks: ['jshint:PreUglify', 'uglify'],
		    options: {
		      spawn: false,
	    	}
	    },
		  site: {
		    files: ['/*.html', '_layouts/*.html'],
		    tasks: [''],
		    options: {
		      spawn: false,
		    }
		  },
		  css: {
		    files: ['scss/*.scss', 'style.scss'],
		    tasks: ['sass'],
		    options: {
		      spawn: false,
		    }
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	 
	grunt.registerTask('default', ['jshint:PreUglify', 'uglify', 'sass', 'watch']);
	// grunt.registerTask('default', ['concat', 'sass', 'watch', 'uglify', 'jshint', 'jekyll']);
};