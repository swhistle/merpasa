"use strict";

(function () {
  //переход по ссылке
  var linkPage = document.querySelectorAll(".js-link");

  linkPage.forEach(function (link, i) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();

      // ajax запрос
      var xhr = new XMLHttpRequest();
      var url;

      xhr.open('GET', 'data.json');

      xhr.timeout = 10000;

      xhr.onload = function (evt) {
        url = JSON.parse(evt.srcElement.response);
        window.location.replace(url[i].url);
      };

      xhr.send();
    });
  });
})();