module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-electron-app-builder');

  grunt.initConfig({
    'build-electron-app': {
        options: {
            platforms: ["darwin", "win32", "linux32", "linux64"],
            app_dir: 'src'
        }
    }
  });

  grunt.registerTask('build', ['build-electron-app']);
};
