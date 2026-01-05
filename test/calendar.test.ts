import { describe, it, expect } from 'vitest';
import { isDateInWeek, isWeekActive } from '../lib/calendar';

describe('calendar utils', () => {
  it('isDateInWeek returns true for dates inside the interval', () => {
    const start = '2025-12-22';
    const end = '2025-12-28';
    expect(isDateInWeek(start, end, '2025-12-22')).toBe(true);
    expect(isDateInWeek(start, end, '2025-12-25')).toBe(true);
    expect(isDateInWeek(start, end, '2025-12-28')).toBe(true);
  });

  it('isDateInWeek returns false for dates outside the interval', () => {
    const start = '2025-12-22';
    const end = '2025-12-28';
    expect(isDateInWeek(start, end, '2025-12-21')).toBe(false);
    expect(isDateInWeek(start, end, '2025-12-29')).toBe(false);
  });

  it('isWeekActive uses timezone to compute today (smoke test)', () => {
    // This is a smoke check that runs without asserting a fixed result.
    // It should not throw.
    const start = '2025-12-22';
    const end = '2025-12-28';
    const res = isWeekActive(start, end, 'America/La_Paz');
    expect(typeof res).toBe('boolean');
  });
});
