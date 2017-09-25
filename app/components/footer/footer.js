//логотип и блоки со ссылкой
  var footerLogo = document.querySelector(".js-footer-logo");
  var links = document.querySelectorAll(".js-link");
  var currentColor = sessionStorage.getItem("currentColor"); //цвет, который мы сохранили в Storage либо по умолчанию синий цвет

//цвета
  var colors = ["26, 72, 166", "167, 27, 59", "166, 120, 26", "27, 167, 104"]; //синий (default): "#1a48a6", красный: "#a71b3b", желтый: "#a6781a", зеленый: "#1ba768"

//номер цветовой схемы
  var colorNumber = +sessionStorage.getItem("currentColorNumber") || 0;
  var colorNumberInitial;

  changeColorScheme(); //задаем цветовую схему для страницы (из Storage либо по умолчанию синюю)

//при наведении на логотип поменяем цвет "подвала" и блоков со ссылкой
  footerLogo.addEventListener("mouseover", function() {
    changeNumberColor();
  });

//функция, выбирающая случайный цвет
  function changeNumberColor() {
    colorNumberInitial = colorNumber;
    colorNumber = Math.round(Math.random() * 3);
    if(colorNumber != colorNumberInitial) {
      changeColorScheme();
    } else {
      changeNumberColor();
    }
  }

//функция, которая изменяет цветовую тему
  function changeColorScheme() {
    currentColor = colors[colorNumber];
    footerLogo.closest(".footer").style.backgroundColor = "rgba(" + currentColor + ", 0.9)";
    links.forEach(function(item, i) {
      var opacity = 0.9 - i / 10;
      item.style.backgroundColor = "rgba(" + currentColor + "," + opacity + ")";
    });
    sessionStorage.setItem("currentColor", currentColor);
    sessionStorage.setItem("currentColorNumber", colorNumber);
  }
