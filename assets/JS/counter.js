 const counters = document.querySelectorAll('.stats__value');

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const update = () => {
      count += target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count);
        setTimeout(update, 20);
      } else {
       
        if (target >= 1000000) {
          counter.innerText = (target / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
        } else if (target >= 1000) {
          counter.innerText = (target / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
        } else {
          counter.innerText = target;
        }
      }
    };

    update();
  });