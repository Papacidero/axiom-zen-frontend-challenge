

module.exports = function(grunt) {

    grunt.initConfig({
       babel: {
           options: {
               sourceMap: false,
               presets: ['es2015']
           },
           dist: {
               files: {
                   "js/script.js": "es6/script.js"
               }
           }
       },
       sass: {
           dist: {
             files: {
               'css/style.css': 'sass/style.scss'
             }
           }
       },
       watch: {
         scripts: {
           files: ['es6/*.js'],
           tasks: ['babel'],
         },
         styles: {
           files: ['sass/*.scss'],
           tasks: ['sass'],
         },
       } 
   });
   
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-babel');
   grunt.registerTask('default', ['watch']);

};