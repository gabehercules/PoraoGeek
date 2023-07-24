export function formatDate(date) {
  const dateInISO = new Date(date);

  const year = dateInISO.getFullYear();
  const month = dateInISO.getMonth();
  const day = dateInISO.getDate();
  const hour = dateInISO.getHours();
  const minute = dateInISO.getMinutes();
  const dateFormated = `${day}/${month}/${year} ${hour}:${minute}`;

  return dateFormated;
}
