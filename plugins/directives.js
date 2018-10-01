import Vue from 'vue';

Vue.directive('random-color-background', {
  bind(el) {
    const colorClasses = ['lightgreen', 'lightyellow', 'lightblue', 'lightsalmon', 'lightskyblue', 'lightgoldenrodyellow', 'lightseagreen', 'lightsteelblue', 'lightcoral'];

    let randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)]; //eslint-disable-line
    el.classList.add(randomColorClass);

  }
});

Vue.directive('random-color-menu', {
  bind(el) {
    const colorClasses = ['lightgreen-slide', 'lightyellow-slide', 'lightblue-slide', 'lightsalmon-slide', 'lightskyblue-slide', 'lightgoldenrodyellow-slide', 'lightseagreen-slide', 'lightsteelblue-slide', 'lightcoral-slide'];
    let currentColor;

    el.addEventListener("mouseenter", function () {
      if (!el.classList.contains('active')) {
        let randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
        currentColor = randomColorClass;
        el.parentNode.classList.add(randomColorClass);
      }
    });

    el.addEventListener("mouseleave", function () {
      if (!el.classList.contains('active')) {
        el.parentNode.classList.remove(currentColor);
        currentColor = null;
      }
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest("nav.nav") && ! e.target.classList.contains("hamburger")) {
        el.parentNode.classList.remove(currentColor);
        currentColor = null;
      }
    });

  }
});