const getDeclension = (number, wordForms) => {
  if (typeof number !== 'number' || !Number.isFinite(number)) {
    return 'Некорректное число';
  }
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return wordForms[2];
  } else if (lastDigit === 1) {
    return wordForms[0];
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return wordForms[1];
  } else {
    return wordForms[2];
  }
};


export default {  
  getDeclension,
}