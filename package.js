Package.describe({
  name: 'jt6562:bootstrap-3-switch',
  version: '3.3.2',
  summary: 'Bootstrap3 switch',
  git: 'https://github.com/jt6562/meteor-bootstrap-3-switch.git',
  documentation: 'README.md'
});

Package.on_use(function (api) {
    api.versionsFrom('0.9.0');
    api.use('jquery@1.9.0', 'client');
    api.add_files([
        'js/bootstrap-switch.min.js',
        'css/bootstrap-switch.min.css'
    ], 'client');
});
