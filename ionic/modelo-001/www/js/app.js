// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ionic.utils' ,'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform, $localstorage) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });

  $localstorage.set('user.name', 'André Morita');
  $localstorage.set('user.status', 'Hoje acordei animado');
  $localstorage.set('user.face', './img/contatos/1001.jpg');
  $localstorage.set('user.lastaccess', '11:34');
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.backButton.text(' ').icon('ion-chevron-left');
  $ionicConfigProvider.backButton.previousTitleText(false);

  $stateProvider
  
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })


  .state('menuleft', {
      url : '/menuleft',
      templateUrl : 'templates/menus/menuleft.html',
      abstract : true,
      controller : 'MenuleftController'
  })
  .state('menuleft.membros', {
      url: '/membros',
      views: {
          'view-menuleft': {
              templateUrl: 'templates/menuleft-membros.html',
              controller : 'MembrosController'
          }
      }
  })
  .state('menuleft.map', {
      url: '/map',
      views: {
          'view-menuleft': {
              templateUrl: 'templates/menuleft-mapmodel.html',
              controller : 'MapController'
          }
      }
  })
  .state('menuleft.mapcomplete', {
      url: '/mapcomplete',
      views: {
          'view-menuleft': {
              templateUrl: 'templates/menuleft-mapcomplete.html',
              controller : 'PlaceController'
          }
      }
  })

  .state('tab.eventos', {
    url: '/eventos',
    views: {
      'tab-eventos': {
        templateUrl: 'templates/tab-eventos.html',
        controller: 'EventosController'
      }
    }
  })

  .state('tab.meuseventos', {
    url: '/meuseventos',
    views: {
      'tab-meuseventos': {
        templateUrl: 'templates/tab-meuseventos.html',
        controller: 'MeuseventosController'
      }
    }
  })

  .state('tab.contatos', {
    url: '/contatos',
    views: {
      'tab-contatos': {
        templateUrl: 'templates/tab-contatos.html',
        controller: 'ContatosController'
      }
    }
  })
  .state('tab.contato', {
    url: '/contato/:contatoId',
    views: {
      'tab-contatos': {
        templateUrl: 'templates/contato.html',
        controller: 'ContatoController'
      }
    }
  })

  .state('tab.conversas', {
    url: '/conversas',
    views: {
      'tab-conversas': {
        templateUrl: 'templates/tab-conversas.html',
        controller: 'ConversasController'
      }
    }
  })
  // .state('tab.conversa', {
  //   url: '/conversa/:conversaId',
  //   views: {
  //     'tab-conversas': {
  //       templateUrl: 'templates/conversar.html',
  //       controller: 'ConversaController'
  //     }
  //   }
  // })

  // .state('tab.conversar', {
  //   url: '/conversar/:contatoId',
  //   views: {
  //     'tab-conversas': {
  //       templateUrl: 'templates/conversar.html',
  //       controller: 'ConversarController'
  //     }
  //   }
  // })  

  .state('conversar', {
    url: '/conversar/:contatoId',
    templateUrl: 'templates/conversar.html',
    controller: 'ConversarController'
  })
  .state('conversas.perfil', {
    url: '/conversar/:conversaId',
    templateUrl: 'templates/conversas-perfil.html',
    controller: 'ConversasPerfilController'
  })

  .state('tab.configuracoes', {
    url: '/configuracoes',
    views: {
      'tab-configuracoes': {
        templateUrl: 'templates/tab-configuracoes.html',
        controller: 'ConfiguracoesController'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/eventos');

})
.directive('ngEnter', function() {
  return function(scope, element, attrs) {
      element.bind("keydown keypress", function(event) {
          if(event.which === 13) {
                  scope.$apply(function(){
                          scope.$eval(attrs.ngEnter);
                  });
                  
                  event.preventDefault();
          }
      });
  };
})
.directive('subheaderMenu', [function(){
    return {
        restrict : "E",
        templateUrl : "templates/menus/tabmenu.html"
      }
}])
.directive('map', function() {
    return {
        restrict: 'A',
        link:function(scope, element, attrs){

          var zValue = scope.$eval(attrs.zoom);
          var lat = scope.$eval(attrs.lat);
          var lng = scope.$eval(attrs.lng);


          var myLatlng = new google.maps.LatLng(lat,lng),
          mapOptions = {
              zoom: zValue,
              center: myLatlng
          },
          map = new google.maps.Map(element[0],mapOptions),
          marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                draggable:true
          });


        }
    };
});
