module.exports = function(grunt) {
	grunt.initConfig({
		sass: {                              // Task 
			dist: {                            // Target 
			  options: {                       // Target options 
			    style: 'compressed'
			  },
			  files: {                         // Dictionary of files 
			    'style.css': 'style.scss'      // 'destination': 'source' 
			  }
			}
		}

		uglify: {                             // Task 
    	my_target: {
    	  files: {
      	  'dest/output.min.js': ['src/input1.js', 'src/input2.js']
      	}
      }
   	}

	  jekyll: {                             // Task 
	    options: {                          // Universal options 
	      bundleExec: true,
	      src : '<%= app %>'
	    },
	    dist: {                             // Target 
	      options: {                        // Target options 
	        dest: '<%= dist %>',
	        config: '_config.yml,_config.build.yml'
	      }
	    },
	    serve: {                            // Another target 
	      options: {
	        dest: '.jekyll',
	        drafts: true
	      }
	    }
	  }

	  watch: {                             // Task 
		  scripts: {
		    files: ['**/*.js'],
		    tasks: ['jshint'],
		    options: {
		      spawn: false,
		    },
		  },
		},

		concat: {                             // Task 
	    options: {
	      separator: ';',
	    },
	    dist: {
	      src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
	      dest: 'dist/built.js',
	    },
  	},
	
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	 
	grunt.registerTask('default', ['watch', 'sass', 'concat', 'uglify', 'jshint', 'jekyll']);
};