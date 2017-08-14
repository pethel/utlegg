export default formatToNorwegian = (date) => {
  const [year, month, day] = date.toISOString().split('T')[0].split('-');
  return `${day}.${month}.${year}`;
};
