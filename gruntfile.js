module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-electron-app-builder');

  grunt.initConfig({
    'build-electron-app': {
        options: {
            platforms: ["darwin", "win32"],
            app_dir: 'src'
        }
    }
  });

  grunt.registerTask('default', ['build-electron-app']);
};
