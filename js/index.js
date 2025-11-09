import { controlTimer, plagins } from './modules/timer.js';
import { renderData, renderControl } from './modules/dataControl.js';

{
    const init = () => {  
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
  renderData();
  renderControl();
  window.timer = init;
}