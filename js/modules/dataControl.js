import { createOption } from './createElements.js';
import declension from './declension.js';
const { getDeclension } = declension;

const tourDate = document.querySelector('#tour__date');
const reservationDate = document.querySelector('#reservation__date');
const selectData = document.querySelectorAll('[name="dates"]');
const selectPeople = document.querySelectorAll('[name="people"]');

const loadData = async () => {
  const res = await fetch('./dates/date.json');
  const data = await res.json();
  return data;
}

const renderOptions = async (el, classList, textContent) => {
  const data = await loadData();
  el.options.length = 0;
  let option = createOption('', textContent, classList);
  el.append(option);
  data.map(item => {
    option = createOption(item.date, item.date, classList);
    el.append(option);
  });
};

export const renderData = async () => {
  renderOptions(tourDate, 'tour__option', 'Выбери дату');
  renderOptions(reservationDate, 'tour__option', 'Дата путешествия');
};

export const renderControl = async () => {
  const data = await loadData();

  selectData.forEach(el => {
    el.addEventListener('change', (e) => {
      let countPeople;
      if (e.target.classList.contains('tour__select')) {
        countPeople = document.querySelector('#tour__people');
      }
      else {
        countPeople = document.querySelector('#reservation__people');
        document.querySelector('.reservation__data').textContent = '';
        document.querySelector('.reservation__price').textContent = '';
      }
      countPeople.options.length = 1;
      data.map(item => {
        if (item.date === e.target.value) {
          for (let i = item["min-people"]; i <= item["max-people"]; i++) {
            const option = createOption(i, i, 'tour__option');
            countPeople.append(option);
          }
        }
      });
    });
  });

  const getDataStr = (date) => {
    const months = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const dates = date.split('.');
    return `${dates[0]} ${months[dates[1] - 1]}`;
  };

  selectPeople.forEach(el => {
    el.addEventListener('change', (e) => {
      if (e.target.classList.contains('reservation__select')) {
        const reservationDataText = document.querySelector('.reservation__data');
        const reservationPriceText = document.querySelector('.reservation__price');
        const temp = reservationDate.value.split(' - ');
        console.log(temp);
        data.map(item => {
          if (item.date === reservationDate.value) {
            reservationDataText.textContent = `${getDataStr(temp[0])} - ${getDataStr(temp[1])}, 
              ${e.target.value} 
              ${getDeclension(Number.parseInt(e.target.value), ['человек', 'человека', 'человек'])}`;
            reservationPriceText.textContent = `${(item.price * e.target.value).toLocaleString('ru')} ₽`;
          }
        });
      }
    });
  });
}




