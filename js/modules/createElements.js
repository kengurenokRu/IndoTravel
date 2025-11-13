const createSpan = (classList) => {
  const span = document.createElement('span');
  span.classList = classList;
  return span;
}

export const createParagraph = (textContent, classList) => {
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

export const createBlock = (classList) => {
  const div = document.createElement('div');
  div.classList = classList;
  return div;
}

export const createTitle = (textContent, classList) => {
  const h2 = document.createElement('h2');
  h2.classList = classList;
  h2.textContent = textContent;
  return h2;
}

export const createButton = (textContent, classList) => {
  const button = document.createElement('button');
  button.classList = classList;
  button.textContent = textContent;
  return button;
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
  timerItemHours.append(timerCountHours, timerUnitsHours);
  const timerItemMinutes = createParagraph('', 'timer__item timer__item_minutes');
  const timerCountMinutes = createSpan('timer__count timer__count_minutes');
  const timerUnitsMinutes = createSpan('timer__units timer__units_minutes');
  timerItemMinutes.append(timerCountMinutes, timerUnitsMinutes);
  container.prepend(title, timerItemDays, timerItemHours, timerItemMinutes);
  container.classList.add('timer');
}

export const createFormModal = () => {
  const overlay = createBlock('overlay overlay_confirm');
  const modal = createBlock('modal');
  overlay.append(modal);
  const modalTitle = createTitle('Подтверждение заявки', 'modal__title');
  modal.append(modalTitle);
  let modalText = createParagraph('Бронирование путешествия в Индию на 6 человек', 'modal__text');
  modal.append(modalText);
  modalText = createParagraph('В даты: 24 ноября - 7 декабря', 'modal__text');
  modal.append(modalText);
  modalText = createParagraph('Стоимость тура 459 588₽', 'modal__text');
  modal.append(modalText);
  const modalButton = createBlock('modal__button');
  let button = createButton('Подтверждаю', 'modal__btn modal__btn_confirm');
  modalButton.append(button);
  button = createButton('Изменить данные', 'modal__btn modal__btn_edit');
  modalButton.append(button);
  modal.append(modalButton);
  return overlay;
}





