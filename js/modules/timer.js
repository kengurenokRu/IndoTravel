import declension from './declension.js';
const { getDeclensionOfDay, getDeclensionOfHours, getDeclensionMinutes, getDeclensionSeconds } = declension;

export const controlTimer = (deadline, timer,
  timerCountDays, timerUnitsDays,
  timerCountHours, timerUnitsHours,
  timerCountMinutes, timerUnitsMinutes,
  heroText, heroTimer) => {
  console.log('11111');

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
        timerUnitsDays.textContent = getDeclensionOfHours(time.hours);
        timerCountHours.textContent = time.minutes.toString().padStart(2, '0');
        timerUnitsHours.textContent = getDeclensionMinutes(time.minutes);
        timerCountMinutes.textContent = time.seconds.toString().padStart(2, '0');
        timerUnitsMinutes.textContent = getDeclensionSeconds(time.seconds);
      } else {
        if (!timer.classList.contains('timer_green')) {
          timer.classList.remove('timer_red');
          timer.classList.add('timer_green');
        }
        timerCountDays.textContent = time.days;
        timerUnitsDays.textContent = getDeclensionOfDay(time.days);
        timerCountHours.textContent = time.hours.toString().padStart(2, '0');
        timerUnitsHours.textContent = getDeclensionOfHours(time.hours);
        timerCountMinutes.textContent = time.minutes.toString().padStart(2, '0');
        timerUnitsMinutes.textContent = getDeclensionMinutes(time.minutes);
      }
  };

  start();
}