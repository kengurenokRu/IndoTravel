import { createOption } from './createElements.js';
import declension from './declension.js';
const { getDeclension } = declension;

const tourDate = document.querySelector('#tour__date');
const reservationDate = document.querySelector('#reservation__date');
const selectData = document.querySelectorAll('[name="dates"]');
const selectPeople = document.querySelectorAll('[name="people"]');
const form = document.querySelector('.reservation__form');
const footerForm = document.querySelector('.footer__form');

const httpRequest = (URL, { method = 'GET', callback, body = {}, headers }) => {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open(method, URL);
    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
      }
    }
    xhr.addEventListener('load', () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        callback(new Error(xhr.status), xhr.response);
        return;
      }
      const data = JSON.parse(xhr.response);
      if (callback) callback(null, data);
    });
    xhr.addEventListener('error', () => {
      callback(new Error(xhr.status), xhr.response);
    });
    xhr.send(JSON.stringify(body));
  }
  catch (err) {
    callback(new Error(err));
  }
};

const fetchRequest = async (url, { method = 'GET', callback, body, headers }) => {
  try {    
    const options = {method, };
    if (body) options.body = JSON.stringify(body);    
    if (headers) options.headers = headers;
    console.log(options);
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      if (callback) callback(null, data);
      return;
    }
    throw new Error(response.status);
  }
  catch (err) {
    callback(new Error(err));
  }
};


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



  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchRequest('https://jsonplaceholder.typicode.com/posts', {
      method: 'post',
      body: {
        date: form.dates.value,
        people: form.people.value,
        name: form.name.value,
        phone: form.phone.value,
      },
      callback(err, data) {
        if (err) {
          form.textContent = err;
        }
        else {
          form.textContent = `Заявка принята. Номер заявки ${data.id}`;
        }
      },
      headers: { 'Content-Type': 'application/json' },
    });
    e.target.reset();
  });

  footerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchRequest('https://jsonplaceholder.typicode.com/posts', {
      methed: 'post',
      body: {
        phone: footerForm.footerPhone.value,
      },
      callback(err, data) {
        if (err) {
          footerForm.textContent = err;
        }
        else {
          const footerFormTitle = document.querySelector('.footer__form-title');
          footerFormTitle.textContent = 'Ваша заявка успешно отправлена';
          const footerText = document.querySelector('.footer__text');
          footerText.textContent = 'Ваша заявка успешно отправлена';
          footerText.style.border = '3px solid red';
          footerText.style.paddingLeft = '20px';
          footerText.style.paddingRight = '20px';
          footerText.style.paddingTop = '10px';
          footerText.style.paddingBottom = '10px';
          document.querySelector('.footer__input-wrap').remove();
        }
      },
      headers: { 'Content-Type': 'application/json' },
    });
    e.target.reset();
  });
}




