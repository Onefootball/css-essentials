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
        }
    });
    grunt.registerTask('release', ['less:production']);
};