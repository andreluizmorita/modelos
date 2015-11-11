angular.module('starter.services', [])
.factory('Contatos', function() {
  var contatos = [{
    id: 0,
    name: 'André Morita',
    lastText: 'Olá como você está?',
    face: './img/contatos/1.png'
  }, {
    id: 1,
    name: 'Andressa Borrelli',
    lastText: 'Oi, estou aqui',
    face: './img/contatos/2.jpeg'
  },{
    id: 2,
    name: 'Ingrid Alessandra da Silva',
    lastText: 'Eu quero ir a um show. O que acha?',
    face: './img/contatos/3.jpeg'
  }, {
    id: 3,
    name: 'David Moura',
    lastText: 'Estou em uma reunião',
    face: './img/contatos/3.jpeg'
  }, {
    id: 4,
    name: 'Conrado Arecco Borrelli',
    lastText: 'O japão é ótimo',
    face: './img/contatos/1.png'
  },{
    id: 5,
    name: 'Luciana Alessandra da Silva',
    lastText: 'Estou indo para a praia',
    face: './img/contatos/1.png'
  }, {
    id: 6,
    name: 'Marco Kudo',
    lastText: 'É consegui chegar até aqui sem ajuda',
    face: './img/contatos/2.jpeg'
  },{
    id: 7,
    name: 'Pamela Mayume',
    lastText: 'Arrisquei demais por muito pouco',
    face: './img/contatos/1.png'
  }, {
    id: 8,
    name: 'Valéria Alessandra Morita',
    lastText: 'O encontro está confirmado ;)',
    face: './img/contatos/3.jpeg'
  }, {
    id: 9,
    name: 'Valquiria da Silva',
    lastText: 'Hoje vai ter churrasco?',
    face: './img/contatos/1.png'
  },{
    id: 10,
    name: 'Yann Buydens',
    lastText: 'One day you should be able to write my name',
    face: './img/contatos/1.png'
  }, {
    id: 11,
    name: 'Alex Aleksanyan',
    lastText: 'hey you can build this in 20 minutes!!',
    face: './img/contatos/3.jpeg'
  }, {
    id: 12,
    name: 'Yann Buydens',
    lastText: 'Hey man I am in front of your office.',
    face: './img/contatos/1.png'
  }];

  return {
    all: function() {
      return contatos;
    },
    remove: function(contato) {
      contatos.splice(contatos.indexOf(contato), 1);
    },
    get: function(contatoId) {
      for (var i = 0; i < contatos.length; i++) {
        if (contatos[i].id === parseInt(contatoId)) {
          return contatos[i];
        }
      }
      return null;
    }
  };
})
.factory('Conversas', function() {
  var conversas = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'Im very very busy because development many projects',
    face: './img/contatos/1.png',
    users: [
      {
        userId:0,
        name: 'Ben Sparrow',
        lastText: 'Status',
        face: './img/contatos/1.png',
      },
      {
        userId:1001,
        name: 'André Morita',
        lastText: 'Status',
        face: './img/contatos/1.png',
      }
    ],
    messages : [{
      userId: 0,
      text: 'Hi',
      time: '13:34'
    }, {
      userId: 1001,
      text: 'Hi. How are you?',
      time: '13:35'
    }, {
      userId: 0,
      text: 'Im fine',
      time: '13:35'
    }, {
      userId: 1001,
      text: 'Talk me about your projects',
      time: '13:36'
    }, {
      userId: 1001,
      text: 'Im very very busy because development many projects',
      time: '13:36'
    }],
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: './img/contatos/2.jpeg'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: './img/contatos/3.jpeg'
  }, {
    id: 3,
    name: 'Davy Engone',
    lastText: 'hey you can build this in 20 minutes!!',
    face: './img/contatos/3.jpeg'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: './img/contatos/1.png'
  },{
    id: 5,
    name: 'Mehdi Boujar',
    lastText: 'Hey did you get the final design for the conf',
    face: './img/contatos/1.png'
  }, {
    id: 6,
    name: 'Martine Nze',
    lastText: 'Hey, call your mom whenever possible! :)',
    face: './img/contatos/2.jpeg'
  },{
    id: 7,
    name: 'Maxime Czch',
    lastText: 'One day you should be able to write my name',
    face: './img/contatos/1.png'
  }, {
    id: 8,
    name: 'Alex Aleksanyan',
    lastText: 'hey you can build this in 20 minutes!!',
    face: './img/contatos/3.jpeg'
  }, {
    id: 9,
    name: 'Yann Buydens',
    lastText: 'Hey man I am in front of your office.',
    face: './img/contatos/1.png'
  }];

  return {
    all: function() {
      return conversas;
    },
    remove: function(conversa) {
      conversas.splice(conversas.indexOf(conversa), 1);
    },
    get: function(conversaId) {
      for (var i = 0; i < conversas.length; i++) {
        if (conversas[i].id === parseInt(conversaId)) {
          return conversas[i];
        }
      }
      return null;
    }
  };
})
.factory('Eventos', function() {
  var eventos = [{
    id: 50,
    titulo: 'Buscar do trabalho',
    descricao: 'Ir ao metrô Conceição para pegar uma carona pra casa',
    capa: './img/eventos/metro.jpg',
    icon: 'ion-android-bus',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 1,
    titulo: 'Café da manhã',
    descricao: 'Encontro pra tomar um café e conversar',
    capa: './img/eventos/coffee.jpg',
    icon: 'ion-coffee',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 2,
    titulo: 'Show de Rock',
    descricao: 'Festival de música',
    capa: './img/eventos/party.jpg',
    icon: 'ion-star',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 51,
    titulo: 'Happy hour',
    descricao: 'Hora de relaxar tomando uma cerveja',
    capa: './img/eventos/beer.jpg',
    icon: 'ion-beer',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 4,
    titulo: 'Fifa desafio',
    descricao: 'Quem é o melhor no FIFA? Desafio',
    capa: './img/eventos/games.jpg',
    icon: 'ion-ios-game-controller-b',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 5,
    titulo: 'Churrasco',
    descricao: 'Venha para o churrasco dos amigos da faculdade',
    capa: './img/eventos/churrasco.jpg',
    icon: 'ion-flame',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 52,
    titulo: 'Fifa desafio',
    descricao: 'Quem é o melhor no FIFA? Desafio',
    capa: './img/eventos/games.jpg',
    icon: 'ion-ios-game-controller-b',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 7,
    titulo: 'Churrasco',
    descricao: 'Venha para o churrasco dos amigos da faculdade',
    capa: './img/eventos/churrasco.jpg',
    icon: 'ion-flame',
    inicio: '17:50',
    hora: '18:00'
  }];

  return {
    all: function() {
      return eventos;
    },
    remove: function(evento) {
      eventos.splice(eventos.indexOf(evento), 1);
    },
    get: function(eventoId) {
      for (var i = 0; i < eventos.length; i++) {
        if (eventos[i].id === parseInt(eventoId)) {
          return eventos[i];
        }
      }
      return null;
    }
  };
})
.factory('Eventosabertos', function() {
  var eventosabertos = [
  {
    id: 30,
    titulo: 'Café em casa',
    descricao: 'Encontro pra tomar um café e conversar',
    capa: './img/eventos/coffee.jpg',
    icon: 'ion-coffee',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 32,
    titulo: 'Show de Rock da 89',
    descricao: 'Festival de música',
    capa: './img/eventos/party.jpg',
    icon: 'ion-star',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 33,
    titulo: 'Beber com os amigos',
    descricao: 'Hora de relaxar tomando uma cerveja',
    capa: './img/eventos/beer.jpg',
    icon: 'ion-beer',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 34,
    titulo: 'Desafio de Lol',
    descricao: 'Quem é o melhor no LOL? Desafio',
    capa: './img/eventos/games.jpg',
    icon: 'ion-ios-game-controller-b',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 35,
    titulo: 'Churrasco de aniversário',
    descricao: 'Venha para o churrasco',
    capa: './img/eventos/churrasco.jpg',
    icon: 'ion-flame',
    inicio: '17:50',
    hora: '18:00'
  }];

  return {
    all: function() {
      return eventosabertos;
    },
    remove: function(evento) {
      eventosabertos.splice(eventosabertos.indexOf(evento), 1);
    },
    get: function(eventoId) {
      for (var i = 0; i < eventosabertos.length; i++) {
        if (eventosabertos[i].id === parseInt(eventoId)) {
          return eventosabertos[i];
        }
      }
      return null;
    }
  };
})
.factory('Meuseventos', function() {
  var meuseventos = [{
    id: 50,
    titulo: 'Buscar do trabalho',
    descricao: 'Ir ao metrô Conceição para pegar uma carona pra casa',
    capa: './img/eventos/metro.jpg',
    icon: 'ion-android-bus',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 51,
    titulo: 'Happy hour',
    descricao: 'Hora de relaxar tomando uma cerveja',
    capa: './img/eventos/beer.jpg',
    icon: 'ion-beer',
    inicio: '17:50',
    hora: '18:00'
  },{
    id: 52,
    titulo: 'Fifa desafio',
    descricao: 'Quem é o melhor no FIFA? Desafio',
    capa: './img/eventos/games.jpg',
    icon: 'ion-ios-game-controller-b',
    inicio: '17:50',
    hora: '18:00'
  }];

  return {
    all: function() {
      return meuseventos;
    },
    remove: function(meusevento) {
      meuseventos.splice(meuseventos.indexOf(meusevento), 1);
    },
    get: function(meuseventoId) {
      for (var i = 0; i < meuseventos.length; i++) {
        if (meuseventos[i].id === parseInt(meuseventoId)) {
          return meuseventos[i];
        }
      }
      return null;
    }
  };
});
