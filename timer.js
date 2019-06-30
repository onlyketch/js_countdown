  window.addEventListener('DOMContentLoaded', function() {
  
    let deadline = "2019-12-31";

  function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t/1000) % 60),
      minutes = Math.floor((t/1000/60) % 60),
      hours = Math.floor((t/(1000*60*60))),
      days = Math.floor(hours/24);

      hours = hours - (days*24);

      return {
         'total' : t,
         'days' : days,
         'hours' : hours,
         'minutes' : minutes,
         'seconds' : seconds
      };
  }

  function setClock(id, endtime) {
      let days = document.getElementById('days'), 
          hours = document.getElementById('hours'),
          minutes = document.getElementById('minutes'),
          seconds = document.getElementById('seconds'),
          timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
          let t = getTimeRemaining(endtime);
          
          function addZero(num) {
              if (num < 10) {
                  return '0' + num;
              } else return num;
          }
          
          
          days.textContent = addZero(t.days);
          hours.textContent = addZero(t.hours);
          minutes.textContent = addZero(t.minutes);
          seconds.textContent = addZero(t.seconds);

          if (t.total <= 0) {
              clearInterval(timeInterval);
              days.textContent = "00";
              hours.textContent = "00";
              minutes.textContent = "00";
              seconds.textContent = "00";

          }
      }    
  }

  setClock('timer', deadline);

  });
  