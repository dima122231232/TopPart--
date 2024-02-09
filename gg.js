// Функция для обработки события скролла страницы
function handleScroll() {
  const header = document.querySelector('#Top');
  const section = document.querySelector('section'); // Выбираем секцию

  // Проверяем, насколько прокручена страница и положение раздела <section>
  if (window.scrollY > section.offsetTop) {
    header.classList.add('scrolled'); // Добавляем класс при достижении раздела <section>
  } else {
    header.classList.remove('scrolled'); // Удаляем класс при возврате наверх
  }
}

// Добавляем обработчик события скролла
window.addEventListener('scroll', handleScroll);

function alerted2(){
  const infoDiv = document.querySelector('#bulochkapika');
  infoDiv.innerHTML = '<h3 class="slide-in" >Терминология</h3 ><div class="info fade-in" id="infoone" ><img src="img/gg1.png" class="img" alt="Иллюстрация" id="sek"><br><br><br><h6 id="sek">Лид</h6><p >Полезное действие со стороны клиентов, которое приносит выгоду вебмастерам</p></div><div class="info fade-in" id="infotwo"><img src="img/gg2.png" class="img" alt="Иллюстрация" id="sek"><br><br><br><h6 id="sek">Холд</h6><p>Установленное время, за которое пользователь, пришедший от вебмастера, обязан подтвердить действие</p></div><div class="info fade-in" id="infothree"><img src="img/gg3.png" class="img" alt="Иллюстрация" id="sek"><br><br><br><h6 id="sek">Трафик</h6><p>Точное количество посетителей за выделенный отрезок времени</p></div><div class="button2"><button type="submit" id="submit" onclick="alerted()"><img src="img/Group 31.png" class="imgbottom" alt="Иллюстрация"></button><button type="submit" id="submit" onclick="alerted2()"><img src="img/Group 32.png" class="imgbottom" alt="Иллюстрация"></button></div>';
}

function alerted(){
  const infoDiv = document.querySelector('#bulochkapika');
  infoDiv.innerHTML = '<h3 class="slide-in">Почему выбирают нас</h3><div class="info fade-in" id="infoone" ><img src="img/Mask group.png" class="img" alt="Иллюстрация"><br><br><br><h6>Высокий доход</h6><p id="taina">Средний заработок от $100 до $2000 в месяц.</p id="taina"></div><div class="info fade-in" id="infotwo"><img src="img/Mask group1.png" class="img" alt="Иллюстрация"><br><br><br><h6>Минимум усилий</h6><p id="taina">Мы обеспечим эффективную рекламу, вам нужно лишь привлечь клиентов.</p></div><div class="info fade-in" id="infothree"><img src="img/Mask group2.png" class="img" alt="Иллюстрация"><br><br><br><h6>Быстрый результат</h6><p>Результаты будут видны сразу после запуска рекламной кампании.</p></div><div class="button2"><button type="submit" id="submit" onclick="alerted()"><img src="img/Group 31.png" class="imgbottom" alt="Иллюстрация"></button><button type="submit" id="submit" onclick="alerted2()"><img src="img/Group 32.png" class="imgbottom" alt="Иллюстрация"></button></div>';
}
