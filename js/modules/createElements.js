const createSpan = (classList) => {
  const span = document.createElement('span');
  span.classList = classList;
  return span;
}

const createParagraph = (textContent, classList) => {
  const p = document.createElement('p');
  p.classList = classList;
  p.textContent = textContent;
  return p;
}

export const createOption = (value, textContent, classList) => {
  const option = document.createElement('option');
  option.classList = classList;
  option.value = value;
  option.textContent = textContent;
  return option;
}


export const createTimerBlock = (container) => {
  const title = createParagraph('До конца акции осталось:', 'timer__title');
  const timerItemDays = createParagraph('', 'timer__item timer__item_days');
  const timerCountDays = createSpan('timer__count timer__count_days');
  const timerUnitsDays = createSpan('timer__units timer__units_days');
  timerItemDays.append(timerCountDays, timerUnitsDays);
  const timerItemHours = createParagraph('', 'timer__item timer__item_hours');
  const timerCountHours = createSpan('timer__count timer__count_hours');
  const timerUnitsHours = createSpan('timer__units timer__units_hours');
  timerItemHours.append(timerCountHours,timerUnitsHours);
  const timerItemMinutes = createParagraph('', 'timer__item timer__item_minutes');
  const timerCountMinutes = createSpan('timer__count timer__count_minutes');
  const timerUnitsMinutes = createSpan('timer__units timer__units_minutes');
  timerItemMinutes.append(timerCountMinutes, timerUnitsMinutes);
  container.prepend(title, timerItemDays, timerItemHours, timerItemMinutes);
  container.classList.add('timer');
}

