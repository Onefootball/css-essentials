module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        less: {
            production: {
                options: {
                    compress: true
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
};