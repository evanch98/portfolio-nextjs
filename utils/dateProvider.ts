export const timeProvider = () => {
  const date = new Date();
  return `${date.getDay()} ${date.getMonth()} ${date.getDate()} ${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`;
};

export const fullYearProvider = () => {
  const date = new Date();
  return date.getFullYear().toString();
};
