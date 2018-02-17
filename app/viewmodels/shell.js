define(['jquery', 'knockout', 'plugins/router', 'bootstrap'], function ($, ko, router) {
     var routes = [
       { route: '', title:'主页', moduleId: 'viewmodels/home', nav: true },
       { route: 'skill', title:'技能', moduleId: 'viewmodels/skill', nav: true },
       { route: 'bookmark', title:'网摘', moduleId: 'viewmodels/bookmark', nav: true }
    ];
    
    var vm = {
        router: router,
        activate: function () {
            router.map(routes).buildNavigationModel().mapUnknownRoutes('shared/viewmodels/not-found');
            return router.activate();
        }
    };

    return vm;
});