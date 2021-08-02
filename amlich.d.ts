declare module 'amlich' {
  /**
   * Calculate Julian day number (the number of days between 1/1/4713 BC (Julian calendar) and dd/mm/yyyy)
   *
   * @remarks
   *    Compute the (integral) Julian day number of day dd/mm/yyyy, i.e., the number
   *    of days between 1/1/4713 BC (Julian calendar) and dd/mm/yyyy.
   *
   * Formula {@link http://www.tondering.dk/claus/calendar.html}
   *
   * @return number
   */
  function jdFromDate(dd: number, mm: number, yyyy: number): number;

  /**
   * Convert a Julian day number to day/month/year
   *
   * @return [dd, mm, yyyy]
   */
  function jdToDate(jd: number): [number, number, number];

  /**
   * Convert solar date dd/mm/yyyy to the corresponding lunar date
   *
   * @example
   *    convertSolar2Lunar(4, 5, 2013, 1); // [ 25, 3, 2013, 0 ]
   *
   * @return [dd, mm, yyyy, timezone]
   */
  function convertSolar2Lunar(
    dd: number,
    mm: number,
    yyyy: number,
    timeZone: number
  ): [number, number, number, number];

  /**
   * Convert a lunar date to the corresponding solar date
   *
   * @example
   *    convertLunar2Solar(21, 1, 2013, 0, 1); // [ 2, 3, 2013]
   *
   * @return [dd, mm, yyyy]
   */
  function convertLunar2Solar(
    lunarDay: number,
    lunarMonth: number,
    lunarYear: number,
    lunarLeap: number,
    timeZone: number
  ): ReturnType<typeof jdToDate>;
}
