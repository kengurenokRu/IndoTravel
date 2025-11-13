import {
  createParagraph,
  createBlock,
  createTitle,
  createButton
} from './createElements.js';

export const createFormModal = (body, date, count, cost) => {
  const overlay = createBlock('overlay overlay_confirm');
  const modal = createBlock('modal');
  overlay.append(modal);
  const modalTitle = createTitle('Подтверждение заявки', 'modal__title');
  modal.append(modalTitle);
  let modalText = createParagraph(`Бронирование путешествия в Индию на ${count}`, 'modal__text');
  modal.append(modalText);
  modalText = createParagraph(`В даты: ${date}`, 'modal__text');
  modal.append(modalText);
  modalText = createParagraph(`Стоимость тура ${cost}`, 'modal__text');
  modal.append(modalText);
  const modalButton = createBlock('modal__button');
  const buttonConfirm = createButton('Подтверждаю', 'modal__btn modal__btn_confirm');
  const buttonCancel = createButton('Изменить данные', 'modal__btn modal__btn_edit');
  modalButton.append(buttonConfirm, buttonCancel);
  modal.append(modalButton);
  body.append(overlay);
  return new Promise((resolve) => {
    buttonConfirm.addEventListener('click', () => {
      overlay.remove();
      resolve(true);
    });
    buttonCancel.addEventListener('click', () => {
    overlay.remove(); 
    resolve(false);
    });
  });
}