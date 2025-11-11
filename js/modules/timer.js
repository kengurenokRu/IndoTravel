import declension from './declension.js';
import {createTimerBlock} from './createElements.js';

const { getDeclension } = declension;

export const plagins = () => {
  const dataTimerDeadline = document.querySelector('[data-deadline]');
  if (dataTimerDeadline !== null) {
    createTimerBlock(dataTimerDeadline);
    return true;
  }
  return false;
}

export const controlTimer = (deadline, timer,
  timerCountDays, timerUnitsDays,
  timerCountHours, timerUnitsHours,
  timerCountMinutes, timerUnitsMinutes,
  heroText, heroTimer) => {
  
  

  const getTime = () => {
    const dateNow = Date.now();
    const deadlineDate = new Date(deadline).getTime();
    const time = deadlineDate - dateNow;
    const seconds = Math.floor(time / 1000 % 60);
    const minutes = Math.floor(time / (1000 * 60) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    return { time, days, hours, minutes, seconds };
  };

  const start = () => {
    const time = getTime(deadline);
    const idTimer = setTimeout(start, 1000);

    if (time.time <= 0) {
      clearTimeout(idTimer);
      heroText.style.display = 'none';
      heroTimer.style.display = 'none';
    } else
      if (time.days <= 0) {
        if (!timer.classList.contains('timer_red')) {
          timer.classList.remove('timer_green');
          timer.classList.add('timer_red');
        }
        timerCountDays.textContent = time.hours.toString().padStart(2, '0');
        timerUnitsDays.textContent = getDeclension(time.hours, ['час', 'часа', 'часов']);
        timerCountHours.textContent = time.minutes.toString().padStart(2, '0');
        timerUnitsHours.textContent = getDeclension(time.minutes, ['минута', 'минуты', 'минут']);
        timerCountMinutes.textContent = time.seconds.toString().padStart(2, '0');
        timerUnitsMinutes.textContent = getDeclension(time.seconds, ['секунда', 'секунды', 'секунд']); 
      } else {
        if (!timer.classList.contains('timer_green')) {
          timer.classList.remove('timer_red');
          timer.classList.add('timer_green');
        }
        timerCountDays.textContent = time.days;
        timerUnitsDays.textContent = getDeclension(time.days, ['день', 'дня', 'дней']); 
        timerCountHours.textContent = time.hours.toString().padStart(2, '0');
        timerUnitsHours.textContent = getDeclension(time.hours, ['час', 'часа', 'часов']);
        timerCountMinutes.textContent = time.minutes.toString().padStart(2, '0');
        timerUnitsMinutes.textContent = getDeclension(time.minutes, ['минута', 'минуты', 'минут']);
      }
  };

  start();
}