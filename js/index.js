import { controlTimer, plagins } from './modules/timer.js';
import { renderData, renderControl } from './modules/dataControl.js';
import { formControl } from './modules/formControl.js';
import {createForms} from './modules/createElements.js';
{
    const init = () => {  
      const body = document.querySelector('body');
      const reservationData = document.querySelector('.reservation__data');
      const reservationPrice = document.querySelector('.reservation__price');
      const [formModalNo, formModalOk] = createForms(body);
      const buttonModalNo = document.querySelector('.buttonModalNo');
      const buttonModalOk = document.getElementsByClassName('buttonModalOk')[0];
      renderData();
      renderControl(formModalNo, formModalOk, reservationData, reservationPrice);  
      formControl(buttonModalNo, buttonModalOk, formModalNo, formModalOk);
      
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
    
  }
  
  window.timer = init;
}