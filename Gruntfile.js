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
        'breakpoints' : grunt.option('breakpoints')
      };

      for(var key in lessModifyVars) {
        var value = lessModifyVars[key];
        if (value === undefined || value === null) {
          delete lessModifyVars[key];
        }
      }
      if (Object.keys(lessModifyVars) === 0) {
        lessModifyVars = undefined;
      }

      var error = false;
      if (lessModifyVars.breakpoints !== undefined) {
        var breakpointString = lessModifyVars.breakpoints;
        var br = breakpointString.split(',');
        br.forEach(function(b, index) {
          try {
            b = b.trim();
            lessModifyVars.breakpoints[index] = b;
            var split = b.split(' ');
            if (split.length !== 2) { error = true; }
            var pix = split[1];
            if (pix !== '0' && pix.length < 3) { error = true; }
            if (pix.length >= 3 && pix.substring(pix.length-2) !== 'px') { error = true; }
          } catch (e) {
            error = true;
          }
        });
      }

      if (error) {
        console.info('');
        console.info('  -- invalid breakpoints string, using defaults --');
        console.info('');
        lessModifyVars = undefined;
      }

      return lessModifyVars;
    }
};
