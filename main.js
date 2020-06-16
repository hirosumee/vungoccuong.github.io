document.addEventListener('DOMContentLoaded', function() {

  const days = document.querySelector('.days span');
  const hour = document.querySelector('.hour');
  const min = document.querySelector('.min');
  const second = document.querySelector('.second');

  const startDate = new Date(2020, 0o5, 14, 20, 40, 0);
  days.innerText = Math.floor((new Date() - startDate)/86400000);
  countTime();

  function countTime() {
    let today = new Date();
    let ms = (today - startDate) % 86400000;
    hour.innerText = Math.floor(ms / 3600000);
    min.innerText = Math.floor(ms % 3600000 / 60000);
    second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
  }

  setInterval(countTime, 1000);

}, false);

//
