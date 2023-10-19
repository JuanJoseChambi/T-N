export function useDate(date: Date | string) {
  const newDate = new Date(date);
  const dia = newDate.getDate(); // Obtener el día del mes (1-31)
  const mes = newDate.getMonth() + 1; // Obtener el mes (0-11)
  const año = newDate.getFullYear(); // Obtener el año (por ejemplo, 2023)
  const hora = newDate.getHours(); // Obtener la hora (0-23)
  const minutos = newDate.getMinutes(); // Obtener los minutos (0-59)
  const fechaCompleta = `${dia}/${mes}/${año}`;
  const horaCompleta = `${hora}:${minutos}`
  return { dia, mes, año, hora, minutos, fechaCompleta, horaCompleta};
}
