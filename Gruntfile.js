module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        less: {
            production: {
                options: {
                    compress: true,
                    modifyVars: cleanUpInputLessGridVars()
                },
                files: {
                    "dist/css-essentials-min.css": "src/all.less"
                }
            }
        },
        connect: {
            demo: {
                options: {
                    port: 9000,
                    base: {
                        path: 'demo'
                    },
                    open: true,
                    keepalive: true
                }
            }
        },
        copy: {
            demo: {
                src: '*',
                dest: 'demo/',
                cwd: 'dist/',
                expand: true
            }
        }
    });
    grunt.registerTask('release', ['less:production']);
    grunt.registerTask('demo', ['less:production', 'copy:demo', 'connect:demo']);

    function cleanUpInputLessGridVars() {
      var lessModifyVars = {
        'of-xsm' : grunt.option('xsm'),
        'of-sm'  : grunt.option('sm'),
        'of-md'  : grunt.option('md'),
        'of-lg'  : grunt.option('lg'),
        'of-xlg' : grunt.option('xlg'),
        'of-xxlg': grunt.option('xxlg')
      };

      var counter = 0;
      for(var key in lessModifyVars) {
        var value = lessModifyVars[key];
        if (value === undefined || value === null) {
          delete lessModifyVars[key];
        } else {
          counter = counter + 1;
        }
      }
      if (counter === 0) {
        lessModifyVars = undefined;
      }
      return lessModifyVars;
    }
};
