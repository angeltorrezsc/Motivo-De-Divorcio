/**
 * Comprueba si una fecha (YYYY-MM-DD) está dentro del rango [start, end].
 */
export const isDateInWeek = (start: string, end: string, date: string): boolean => {
  return date >= start && date <= end;
};

/**
 * Comprueba si la fecha actual (en la zona horaria dada) está dentro del rango [start, end].
 */
export const isWeekActive = (start: string, end: string, timezone: string = 'America/La_Paz'): boolean => {
  try {
    const now = new Date();
    // Formato YYYY-MM-DD en la zona horaria especificada
    const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' });
    const today = formatter.format(now);
    return today >= start && today <= end;
  } catch (e) {
    return false;
  }
};