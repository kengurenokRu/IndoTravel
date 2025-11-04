const getDeclensionOfDay = (number) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'дней';
  } else
    if (lastDigit === 1) {
      return 'день';
    } else
      if (lastDigit >= 2 && lastDigit <= 4) {
        return 'дня';
      }
  return 'дней';
}

const getDeclensionOfHours = (number) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'часов';
  } else
    if (lastDigit === 1) {
      return 'час';
    } else
      if (lastDigit >= 2 && lastDigit <= 4) {
        return 'часа';
      }
  return 'часов';
}

const getDeclensionMinutes = (number) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return 'минута';
  } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits > 20)) {
    return 'минуты';
  }
  return 'минут';
}

export {
  getDeclensionOfDay,
  getDeclensionOfHours,
  getDeclensionMinutes
}