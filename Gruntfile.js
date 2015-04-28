module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['js/vendor/*.js', 'js/global.js'], // input
        dest: 'js/build/global.min.js' // output
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    },


    // sass: {
    //   dist: {
    //     options: {
    //       style: 'compressed'
    //     },
    //     files: {
    //       'stylesheets/build/style.css': 'sass/style.scss'
    //     }
    //   } 
    // },
    
    
    watch: {
      scripts: {   
        files: ['js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['**/*.scss'],
        tasks: ['compass'],
        options: {
          spawn: false,
        },
      },
    },



    compass: {                
    dist: {                   
      options: {              
        sassDir: 'sass',
        cssDir: 'stylesheets/build',
        environment: 'development' //environment: 'production'
      }
    },
    dev: {                    
      options: {
        sassDir: 'sass',
        cssDir: 'stylesheets/build'
      }
    }
  }
});

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify','compass', 
    'imagemin', 'watch', 'sass']);

};