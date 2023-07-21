export const timeProvider = () => {
  const date = new Date();
  let day: string = "";
  switch (date.getDay()) {
    case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = " Sat";
      break;
    default:
      day = "";
      break;
  }
  return `${day} ${date.getMonth()} ${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export const fullYearProvider = () => {
  const date = new Date();
  return date.getFullYear().toString();
};
