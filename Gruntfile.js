module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    args: [],
                    ignore: ['node_modules/**'],
                    ext: 'js,html,css,jsx',
                    nodeArgs: [],
                    delayTime: 1,
                    env: {
                        PORT: require('./server/config').port
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon'],
            options: {
                logConcurrentOutput: true
            }
        },
        browserSync: {
            bsFiles: {
                src: ['./**/*']
            },
            options: {
                proxy: 'localhost:3000',
                watchTask: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default', ['jshint', 'concurrent', 'browserSync']);

};
