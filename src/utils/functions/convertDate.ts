export const convertFullDate = (date: Date) => {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
};

export const timeToString = (hour: number) => {
  return hour.toString().padStart(2, '0') + ':00';
};
