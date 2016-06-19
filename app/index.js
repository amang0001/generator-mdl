'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the brilliant ' + chalk.red('generator-mdl') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'appname',
      message: 'What would you like to name the app?',
      default: this.appname
    }];

    return this.prompt(prompts).then(function(props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.appname
      }
    );

    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'), {
        name: this.props.appname
      }
    );

    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );

    this.fs.copy(
      this.templatePath('.bowerrc'),
      this.destinationPath('.bowerrc')
    );

    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('.gitattributes'),
      this.destinationPath('.gitattributes')
    );

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('.stylelintrc'),
      this.destinationPath('.stylelintrc')
    );

    this.fs.copy(
      this.templatePath('.travis.yml'),
      this.destinationPath('.travis.yml')
    );

    this.fs.copy(
      this.templatePath('gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js')
    );

    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
  },

  appFiles: function() {
    this.directory('app');
    this.directory('gulp');
  },

  install: function() {
    this.installDependencies();
  }
});
