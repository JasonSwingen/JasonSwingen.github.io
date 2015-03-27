module.exports = function(grunt) {
	grunt.initConfig({
		
		// concat: {                             // Task 
	 //    scss: {
	 //      src: ['scss/_reset.scss',
	 //      			'scss/_variables.scss',
	 //      			'plugins/bourbon/addons/_prefixer.scss',
	 //      			'plugins/bourbon/*.scss',
	 //      			'plugins/neat/*.scss',
	 //      			'plugins/neat/**/*.scss',
	 //      			'plugins/base/*.scss',
	 //      			'plugins/base/**/*.scss',
	 //      			'scss/_main.scss',
		// 					'scss/_clearfix.scss',
	 //      			'scss/_mixins.scss',
	 //      			'scss/_breakpoints.scss',
	 //      			'scss/_masthead.scss',
	 //      			'scss/_parallax.scss',
	 //      			'scss/_flex.scss',
	 //      			'scss/_post.scss',
	 //      			'scss/_page.scss',
	 //      			'scss/_youtube.scss',
		// 					'scss/_footer.scss',
	 //      			'scss/_bullets.scss',
	 //      			'scss/_contact.scss',
	 //      			'scss/_tip-up.scss',
	 //      			'scss/_highlights.scss',
	 //      			'scss/*.scss'],
	 //      dest: 'build/scss/styles.scss',
	 //    },
		// },

		sass: {                              // Task 
			dist: {                            // Target 
			  options: {                       // Target options 
			    style: 'compressed'
			  },
			  files: {                         // Dictionary of files 
			    'build/css/*.css': 'scss/*.scss'     // 'destination': 'source' 
			  }
			}
		}

		// uglify: {                             // Task 
  //   	my_target: {
  //   	  files: {
  //     	  'dest/output.min.js': ['src/input1.js', 'src/input2.js']
  //     	},
  //     },
  //  	},

	 //  jekyll: {                             // Task 
	 //    options: {                          // Universal options 
	 //      bundleExec: true,
	 //      src : '<%= app %>'
	 //    },
	 //    dist: {                             // Target 
	 //      options: {                        // Target options 
	 //        dest: '<%= dist %>',
	 //        config: '_config.yml,_config.build.yml'
	 //      }
	 //    },
	 //    serve: {                            // Another target 
	 //      options: {
	 //        dest: '.jekyll',
	 //        drafts: true
	 //      },
	 //    },
	 //  },

	 //  watch: {                             // Task 
		//   scripts: {
		//     files: ['**/*.js'],
		//     tasks: ['jshint'],
		//     options: {
		//       spawn: false,
		//     },
		//   },
		// },
	
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-jekyll');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	 
	grunt.registerTask('default', ['sass']);
	// grunt.registerTask('default', ['concat', 'sass', 'watch', 'uglify', 'jshint', 'jekyll']);
};