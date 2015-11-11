// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
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

});
