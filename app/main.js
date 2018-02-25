requirejs.config({
    baseUrl: 'app/',
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'plugins/http': 'shared/http',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.1.0',
        'jquery': '../lib/jquery/jquery-2.1.1.min',
        'bootstrap': '../lib/bootstrap/js/bootstrap.min',
        'gojs': '../lib/gojs/go',
        'shared': 'shared'        
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'jquery', 'knockout'], function (system, app, viewLocator, dialog, $, ko, toastr) {

    system.debug(true);

    app.title = "编程玩家";

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function () {
        viewLocator.useConvention();
        app.setRoot('viewmodels/shell', 'entrance', 'applicationHost');
    });
});