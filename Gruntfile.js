module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2,
          sourceMap: true,
          sourceMapFilename: "css/main.css.map",
          sourceMapBasepath: "css/",
          sourceMapURL: "main.css.map"
        },
        files: {
          "css/main.css": "less/main.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer-core')
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('dist', ['less', 'postcss']);
};