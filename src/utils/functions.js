export function formatDate(date) {
  const dateInISO = new Date(date);
  const now = new Date();
  const diff = now - dateInISO;

  const year = dateInISO.getFullYear();
  const month = dateInISO.getMonth();
  const day = dateInISO.getDate();
  const hour = dateInISO.getHours();
  const minute = dateInISO.getMinutes();
  const dateFormated = `${day}/${month}/${year} às ${hour}:${minute}`;

  if( diff < 60000 ) {
    return 'Agora pouco';
  } else {
    return dateFormated;
  }
}
