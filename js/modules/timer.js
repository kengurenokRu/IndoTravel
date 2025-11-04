import {getDeclensionOfDay, getDeclensionOfHours, getDeclensionMinutes} from './declension';

export const controlTimer = (deadline, timerCountDays, timerUnitsDays, timerCountHours, timerUnitsHours, timerCountMinutes, timerUnitsMinutes) => {
  const getTime = () => {
    const dateNow = Date.now();
    const deadlineDate = new Date(deadline).getTime();
    const time = deadlineDate - dateNow;
    const minutes = Math.floor(time / (1000 * 60) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    return { days, hours, minutes };
  };

  const start = () => {
    const time = getTime(deadline);
    timerCountDays.textContent = time.days;
    timerUnitsDays.textContent = getDeclensionOfDay(time.days);
    timerCountHours.textContent = time.hours.toString().padStart(2, '0');
    timerUnitsHours.textContent = getDeclensionOfHours(time.hours)
    timerCountMinutes.textContent = time.minutes.toString().padStart(2, '0');
    timerUnitsMinutes.textContent = getDeclensionMinutes(time.minutes)
    const idTimer = setTimeout(start, 1000);

    if (time.days <= 0 && time.hours <= 0 && time.minutes <= 0) {
      clearTimeout(idTimer);      
      heroText.style.display = 'none';      
      heroTimer.style.display = 'none';
    };
  };

  start();
}