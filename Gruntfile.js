module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      options: {
        compress: false,
        yuicompress: true,
        optimization: 2,
      },
      development: {
        options: {
          sourceMap: true,
          sourceMapFileInline: true
          // sourceMapFilename: "css/main.css.map",
          // sourceMapBasepath: "css/",
          // sourceMapURL: "main.css.map"
        },
        files: {
          "css/main.css": "less/main.less"
        }
      },
      production: {
        options: {
          sourceMap: false,
          modifyVars: {
            "path-fonts": "''"
          }
        },
        files: {
          "css/main.css": "less/main.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less:development'],
        options: {
          nospawn: true
        }
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer'),
          require('pixrem'),
          require('cssnano')({
            'safe': true,
            'sourcemap': false,
            'autoprefixer': false,
            'postcss-convert-values': false
          })
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    }
  });

  grunt.registerTask('default', ['less:development', 'watch']);
  grunt.registerTask('dist', ['less:production', 'postcss']);
};