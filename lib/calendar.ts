import { ICalendarWeek } from "./types";

export function toZoneDateString(timeZone = 'America/La_Paz') {
  // Get current date/time in target timezone, as ISO YYYY-MM-DD
  const locale = new Date().toLocaleString('en-CA', { timeZone });
  const d = new Date(locale);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function isWeekActive(weekStartIso: string, weekEndIso: string, timeZone = 'America/La_Paz') {
  const todayIso = toZoneDateString(timeZone);
  return isDateInWeek(weekStartIso, weekEndIso, todayIso);
}

export function parseISO(dateIso: string) {
  return new Date(dateIso + 'T00:00:00Z');
}

export function isDateInWeek(weekStartIso: string, weekEndIso: string, dateIso: string) {
  return dateIso >= weekStartIso && dateIso <= weekEndIso;
}

export function isCurrentWeek(week: ICalendarWeek, currentDate: Date): boolean {
  const weekStart = new Date(week.weekStart);
  const weekEnd = new Date(week.weekEnd);
  weekEnd.setHours(23, 59, 59, 999); // Set to end of day

  return currentDate >= weekStart && currentDate <= weekEnd;
}

export function getWeekRange(date: Date): { weekStart: string; weekEnd: string } {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is sunday
  const weekStart = new Date(date.setDate(diff));
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);

  return {
    weekStart: weekStart.toISOString().split('T')[0],
    weekEnd: weekEnd.toISOString().split('T')[0],
  };
}
