angular.module('starter.controllers', [])

.controller('EventosController', function($scope, $ionicModal, $ionicPopup, Eventos, Eventosabertos, Contatos) {
  $scope.eventos = Eventos.all();
  $scope.eventosabertos = Eventosabertos.all();
	$scope.contatos = Contatos.all();

	$scope.edit = function(){
		$scope.showDelete = !$scope.showDelete;
	};

	$scope.remove = function(evento) {
  	Eventos.remove(evento);
	};

	$ionicModal.fromTemplateUrl('templates/buscar.html', {
    scope: $scope,
    animation: 'slide-in-up'
	}).then(function(modal) {
  	$scope.modal = modal;
	});

	$scope.openModal = function() {
  	$scope.modal.show();
	};
	
	$scope.closeModal = function() {
  	$scope.modal.hide();
	};

	$scope.done = function(){
		$scope.closeModal();
	};

  var modal1 = $ionicModal.fromTemplateUrl('templates/enviar-convite.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal1) {
    $scope.modal1 = modal1;
  });
  
  $scope.openInvite = function() {
    $scope.modal1.show();
  };
  
  $scope.closeInvite = function() {
    $scope.modal1.hide();
  };

  $scope.done = function(){
    $scope.closeInvite();
  };

 $scope.showPopup = function() {
   $scope.data = {}

   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Digite novamente sua senha',
     subTitle: 'Por favor use normalmente',
     scope: $scope,
     buttons: [
       { text: 'Cancelar' },
       {
         text: '<b>Salvar</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); 
   }, 3000);
  };
   // A confirm dialog
   $scope.showConfirm = function(evento) {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Remover evento',
       template: 'Deseja remover este evento da sua lista de avisos?',
       buttons: [
        { text: 'Cancelar' },
        {
          text: '<b>Confirmar</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.wifi) {
              e.preventDefault();
            } else {
              return $scope.data.wifi;
            }
          }
        }]
     });
     confirmPopup.then(function(res) {
       if(res) {
         $scope.remove(evento);
       } else {
         console.log('You are not sure');
       }
     });
   };

   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Don\'t eat that!',
       template: 'It might taste good'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

})

.controller('ContatosController', function($scope, $ionicModal, $cordovaContacts, Contatos, $interval) {
  $scope.listacontatos = Contatos.all();
  
  // $interval(function(){
  //   console.log($scope.buscar);
  // },2000);

  $scope.remove = function(contato) {
    Contatos.remove(contato);
  };

  // debugger
  // $cordovaContacts.find({filter: ''}).then(function(result) {
  //     // Contact saved
  //     console.log(result);
  //   }, function(err) {
  //     // Contact error
  //     console.log(err);
  //   });

  $ionicModal.fromTemplateUrl('templates/criar-evento.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
  	console.log('inside openModal');
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.done = function(){
  	$scope.closeModal();
  };
})

.controller('ContatoController', function($scope, $ionicModal, $ionicHistory, $stateParams, Contatos) {
  $scope.contato = Contatos.get($stateParams.contatoId);

  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
})

.controller('ConversasController', function($scope, $ionicModal, Conversas, Contatos) {
    $scope.contatos = Contatos.all();
  	$scope.conversas = Conversas.all();
  	$scope.remove = function(conversa) {
    	Conversas.remove(conversa);
  	};

  	$ionicModal.fromTemplateUrl('templates/nova-conversa.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
  	}).then(function(modal) {
    	$scope.modal = modal;
  	});

  	$scope.openModal = function() {
    	$scope.modal.show();
  	};
  	
  	$scope.closeModal = function() {
    	$scope.modal.hide();
  	};

  	$scope.done = function(){
  		$scope.closeModal();
  	};

  	$scope.edit = function(){
		$scope.showDelete = !$scope.showDelete;
  	};

	$scope.remove = function(conversa) {
		Conversas.remove(conversa);
	};
})

.controller('ConversarController', function($scope, $stateParams, $ionicHistory, Conversas) {
  $scope.conversa = Conversas.get($stateParams.contatoId);

  $scope.goBack = function(){
    $ionicHistory.goBack();
  };


})

.controller('ConversaController', function($scope, $stateParams, $ionicHistory, Conversas) {
  $scope.conversa = Conversas.get($stateParams.conversaId);

  $scope.goBack = function(){
  	$ionicHistory.goBack();
	};
})

.controller('ConfiguracoesController', function($scope) {
  $scope.configuracoes = {
    conexao: true,
    localizacao: true,
    geolocalizacao: true,
    meucontato: true,
    historico: false,
    notificacoes: true,

  };
})
.controller('MeuseventosController', function($scope, $ionicModal, Meuseventos) {
  $scope.eventos = Meuseventos.all();

	$scope.edit = function(){
		$scope.showDelete = !$scope.showDelete;
	}

	$scope.remove = function(evento) {
    	Meuseventos.remove(evento);
  	}


    $ionicModal.fromTemplateUrl('templates/criar-evento.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };
    
    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.done = function(){
      $scope.closeModal();
    };
});
