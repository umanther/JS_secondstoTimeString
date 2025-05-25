// Calculates 'magic numbers' for conversion math
const MS_IN = Object.freeze({
  WEEK:   1000 * 60 * 60 * 24 * 7,
  DAY:    1000 * 60 * 60 * 24,
  HOUR:   1000 * 60 * 60,
  MINUTE: 1000 * 60,
  SECOND: 1000
})

// Only returns true if n is a finite value of the 'number' type
const isValidNumber = n => typeof n === 'number' && Number.isFinite(n)

function secondsToTimeString(seconds) {
  /**
   * Format a 'number' of seconds as a human-readable string.
   * Supports up to three decimal places in milliseconds, trimmed.
   * @param {number} seconds - The input seconds (may be negative).
   * @returns {string} e.g. "1w 2d 3h 4m 5s 6.789ms" or non-number unchanged.
  */

  'use strict';
  // Exit if not a real number type or if value is 0
  if (!isValidNumber(seconds) || !seconds) return seconds === 0 ? '0s' : seconds
    
  // Store the presence of a negative value for later
  const sign = seconds < 0 ? '-' : ''

  // Convert seconds to milliseconds for the following conversion math
  // Save the remainder to add in later, making the math faster
  let remMS = Math.abs(seconds) * 1000
  const remainder = remMS % 1
  remMS = Math.floor(remMS)

  // Convert to weeks, days, hours, minutes, seconds and milliseconds
  const w = remMS / MS_IN.WEEK   | 0; remMS %= MS_IN.WEEK
  const d = remMS / MS_IN.DAY    | 0; remMS %= MS_IN.DAY
  const h = remMS / MS_IN.HOUR   | 0; remMS %= MS_IN.HOUR
  const m = remMS / MS_IN.MINUTE | 0; remMS %= MS_IN.MINUTE
  const s = remMS / MS_IN.SECOND | 0; remMS %= MS_IN.SECOND
  const ms = parseFloat((remMS + remainder).toFixed(3))

  // Build output string
  const output = [
    w && `${w}w`,
    d && `${d}d`,
    h && `${h}h`,
    m && `${m}m`,
    s && `${s}s`,
    ms && `${ms}ms`
  ].filter(Boolean)

  // Return final result
  return sign + (output.length ? output.join(' ') : '0s')
}
