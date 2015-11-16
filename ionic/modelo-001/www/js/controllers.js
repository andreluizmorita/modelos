angular.module('starter.controllers', [])

.controller('EventosController', function($scope, $ionicModal, $ionicPopup, Eventos, Eventosabertos, Contatos, Meuseventos) {
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

  $scope.showConfirm = function(evento) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Remover evento',
      template: 'Deseja remover este evento da sua lista de avisos?',
      okText:'OK',
      cancelText: 'Cancelar'
    });

    confirmPopup.then(function(res) {
      if(res) {
        if(evento.tipo == 'meuseventos'){
          Meuseventos.add(evento);
        } else if(evento.tipo == 'eventosabertos'){
          Eventosabertos.add(evento);
        }
        Eventos.remove(evento);
        
      } else {
        console.log('You are not sure');
      }
    });
  };

  $scope.abertoConfirm = function(evento) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Adicionar evento',
      template: 'Deseja adicionar este evento da sua lista de avisos?',
      okText:'OK',
      cancelText: 'Cancelar'
    });

    confirmPopup.then(function(res) {
      if(res) {
        Eventosabertos.remove(evento);
        Eventos.add(evento);
        
      } else {
        console.log('You are not sure');
      }
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

.controller('ConversarController', function($scope, $stateParams, $ionicHistory, $localstorage, $ionicScrollDelegate, Conversas) {
  $scope.conversa = Conversas.get($stateParams.contatoId);
  $scope.running = false;

  $scope.enviarMensagem = function(){
    $scope.running = true;

    if($scope.mensagem.texto !=''){
      var d = new Date();
      message = {
        name: $localstorage.get('user.name'),
        text: $scope.mensagem.texto,
        face: $localstorage.get('user.face'),
        time: d.getHours()+':'+d.getMinutes(),
        chatdirection: 'chat-message-left',
        statusMessage: 'ion-ios-checkmark-outline'
      };

      Conversas.save($stateParams.contatoId, message);

      $scope.conversa = Conversas.get($stateParams.contatoId);
    }

    $scope.mensagem.texto = '';
    $scope.running = false;

    $ionicScrollDelegate.scrollBottom(true);
  };

  $scope.goBack = function(){
    $ionicHistory.goBack();
  };


})
.controller('ConversaPerfilController', function($scope, $stateParams, $ionicHistory, Conversas) {
  $scope.conversa = Conversas.get($stateParams.conversaId);

  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
})
.controller('NavController', function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
})
.controller('MenuleftController', function($scope, $ionicSideMenuDelegate) {

})
.controller('MembrosController', function($scope, $ionicSideMenuDelegate) {

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
.controller('MeuseventosController', function($scope, $timeout, $ionicModal, $ionicPopup, $cordovaGeolocation, $ionicLoading, Meuseventos, Contatos, Eventos) {
  $scope.eventos = Meuseventos.all();
  $scope.contatos = Contatos.all();

  $scope.edit = function(){
    $scope.showDelete = !$scope.showDelete;
  };

  $scope.remove = function(evento) {
    Eventos.remove(evento);
  };

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

  $scope.removeConfirm = function(evento) {

    var confirmPopup = $ionicPopup.confirm({
      title: 'Remover evento',
      template: 'Deseja apagar este evento da sua lista de avisos?',
      okText:'OK',
      cancelText: 'Cancelar'
    });

    confirmPopup.then(function(res) {
      if(res) {
        Meuseventos.remove(evento);
       
      } else {
        console.log('You are not sure');
      }
    });
  };

  $scope.addConfirm = function(evento) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Adicionar evento',
      template: 'Deseja adicionar este evento da sua lista de avisos?',
      okText:'OK',
      cancelText: 'Cancelar'
    });

    confirmPopup.then(function(res) {
      if(res) {
        Eventos.add(evento);
        Meuseventos.remove(evento);
      } else {
        console.log('You are not sure');
      }
    });
  };

  var map;

  // function initialize() {
  //   var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
    
  //   var mapOptions = {
  //     center: myLatlng,
  //     zoom: 16,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
  //   //Marker + infowindow + angularjs compiled ng-click
  //   var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
  //   var compiled = $compile(contentString)($scope);

  //   var infowindow = new google.maps.InfoWindow({
  //     content: compiled[0]
  //   });

  //   var marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map,
  //     title: 'Uluru (Ayers Rock)'
  //   });

  //   google.maps.event.addListener(marker, 'click', function() {
  //     infowindow.open(map,marker);
  //   });

  //   $scope.map = map;
  // }

  //map = google.maps.event.addDomListener(window, 'load', initialize);

  // --- Map --------------------------------------------------------
  var modalMap = $ionicModal.fromTemplateUrl('templates/map-set.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modalMap) {
    $scope.modalMap = modalMap;
  });

  var geocoder = new google.maps.Geocoder();

  $scope.openMap = function() {
    $scope.modalMap.show();

    $ionicLoading.show({
      template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Localizando...'
    });

    var posOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    };
   
    $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
       
      var myLatlng = new google.maps.LatLng(lat, long);
       
      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };               
      var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

      var marker = new google.maps.Marker({
        position: {lat: lat, lng: long},
        title: 'Teste',
        map: map
      });

      $scope.map = map;   
      $ionicLoading.hide();           
         
    }, function(err) {

      var myLatlng = new google.maps.LatLng(40,-80);
      
      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }; 
      var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

      var marker = new google.maps.Marker({
        position: {lat: 40, lng: -80},
        title: 'Teste',
        map: map
      });

      $scope.map = map; 

      $ionicLoading.hide();
      console.log(err);
    });
  };
  
  $scope.endereco = 'sao paulo';
  $scope.local = '';

  // -- Google Geocoding
  $scope.localizar = function () {
    console.log($scope.endereco);
    console.log($scope.local);
    var address = "São Paulo, São Paulo - SP, Brasil";
    
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {

        var mapOptions = {
          center: results[0].geometry.location,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }; 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  $scope.closeMap = function() {
    $scope.modalMap.hide();
  };

  $scope.doneMap = function(){
    $scope.closeMap();
  };




  
  $scope.centerOnMe = function() {
    if(!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  };
  
  $scope.clickTest = function() {
    alert('Example of infowindow with ng-click')
  };



})
.controller('MapController', function($scope, $cordovaGeolocation, $ionicLoading) {

    $ionicLoading.show({
      template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Localizando...'
    });

    var posOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    };
    
    var geocoder = new google.maps.Geocoder();

    $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
       
      var myLatlng = new google.maps.LatLng(lat, long);
       
      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };               
      var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

      var marker = new google.maps.Marker({
        position: {lat: lat, lng: long},
        title: 'Teste',
        map: map
      });

      $scope.map = map;   
      $ionicLoading.hide();           
         
    }, function(err) {

      var myLatlng = new google.maps.LatLng(40,-80);
      
      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }; 
      var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

      var marker = new google.maps.Marker({
        position: {lat: 40, lng: -80},
        title: 'Teste',
        map: map
      });

      $scope.map = map; 

      $ionicLoading.hide();
      console.log(err);
    });

  $scope.localizar = function () {
    var address = $scope.endereco;
    
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {

        var mapOptions = {
          center: results[0].geometry.location,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }; 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
})

.controller('PlaceController', function($scope, $ionicLoading, $cordovaGeolocation){
  // This example displays an address form, using the autocomplete feature
  // of the Google Places API to help users fill in the information.

  var placeSearch, autocomplete;
  var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('endereco')),
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    //autocomplete.addListener('place_changed', fillInAddress);
  }

  initAutocomplete();

  $scope.fillInAddress = function () {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
      }
    }
  }

  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }

  $ionicLoading.show({
      template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Localizando...'
    });

    var posOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    };
    
    var geocoder = new google.maps.Geocoder();

    $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
       
      var myLatlng = new google.maps.LatLng(lat, long);
       
      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };               
      var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

      var marker = new google.maps.Marker({
        position: {lat: lat, lng: long},
        title: 'Teste',
        map: map
      });

      $scope.map = map;   
      $ionicLoading.hide();           
         
    }, function(err) {

      var myLatlng = new google.maps.LatLng(40,-80);
      
      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }; 
      var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

      var marker = new google.maps.Marker({
        position: {lat: 40, lng: -80},
        title: 'Teste',
        map: map
      });

      $scope.map = map; 

      $ionicLoading.hide();
      console.log(err);
    });

  $scope.localizar = function () {
    var address = $scope.endereco;
    
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {

        var mapOptions = {
          center: results[0].geometry.location,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }; 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
})

.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
    });
