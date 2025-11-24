import { controlTimer, plagins } from './modules/timer.js';
import { renderData, renderControl } from './modules/dataControl.js';

{
    const init = () => {        
      renderData();
      renderControl();  
    if (plagins()) {      
      const timer = document.querySelector('.timer');
      const deadline = timer.dataset.deadline;
      const timerCountDays = document.querySelector('.timer__count_days');
      const timerUnitsDays = document.querySelector('.timer__units_days');
      const timerCountHours = document.querySelector('.timer__count_hours');
      const timerUnitsHours = document.querySelector('.timer__units_hours');
      const timerCountMinutes = document.querySelector('.timer__count_minutes');
      const timerUnitsMinutes = document.querySelector('.timer__units_minutes');
      const heroText = document.querySelector('.hero__text');
      const heroTimer = document.querySelector('.hero__timer');

      controlTimer(deadline, timer,
        timerCountDays,
        timerUnitsDays,
        timerCountHours,
        timerUnitsHours,
        timerCountMinutes,
        timerUnitsMinutes,
        heroText,
        heroTimer);
    };
    const reservationPhone = document.querySelector('#reservation__phone');
    const telMask = new Inputmask('+7 (999) | 999 - 99 - 99');
    telMask.mask(reservationPhone);

    const justValidate = new JustValidate('.reservation__form');
    justValidate
    .addField('#reservation__date', [
      {rule: 'required',
        errorMessage: 'Укажите даты путешествия',
       }
    ])
    .addField('#reservation__people', [
      {rule: 'required',
        errorMessage: 'Укажите количество человек',
       }
    ]);
  }
  
  window.timer = init;
}