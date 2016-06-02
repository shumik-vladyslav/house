(function () {
  'use strict';

  angular
    .module('app')
    .factory('DialogService', DialogService);

  /** @ngInject */
  function DialogService() {
    var data = [{
      id: 1,
      subject: 'Письмо 1',
      created: '2016-03-01 23:59',
      parts: [{ id: 1, author: 'vasya', text: 'Привет, как дела?' }, {
        id: 2,
        author: 'petya',
        text: 'Привет, все хорошо, спасибо!'
      }]
    },
      {
        id: 2,
        subject: 'Письмо 2',
        created: '2016-03-02 14:19',
        parts: [{ id: 1, author: 'petr', text: 'Здравствуйте, тут есть кто-нибудь?' }, {
          id: 2, author: 'vasiliy', text: 'Да, я вас слушаю!'
        }]
      }
    ];

    var service = {
      getData: getData,
      getPartsById: getPartsById,
      addMessage: addMessage
    };

    return service;

    function addMessage(id, meessage) {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var element = data[key];
          if (element.id === id) {
            var obj = {};
            var lastMessage = element.parts[element.parts.length - 1];
            obj.id = lastMessage.id + 1;
            obj.author = lastMessage.author;
            obj.text = meessage;
            element.parts.push(obj);
          }
        }
      }
    }

    function getPartsById(id) {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var element = data[key];
          if (element.id === id) {
            return element;
          }
        }
      }
    }

    function getData() {
      return data;
    }
  }
})();
