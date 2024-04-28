function secondsToTimeString(seconds) {
  'use strict';
  let output = [];

  const w = Math.abs(Math.trunc(seconds / 604800));
  const d = Math.abs(Math.trunc(seconds / 86400) % 7);
  const h = Math.abs(Math.trunc(seconds / 3600) % 24);
  const m = Math.abs(Math.trunc(seconds / 60) % 60);
  const s = Math.abs(Math.trunc(seconds / 1) % 60);
  const ms = Math.abs(((seconds * 1000) % 1000).toFixed(3));

  output.push(w === 0 ? null : `${w}w`);
  output.push(d === 0 ? null : `${d}d`);
  output.push(h === 0 ? null : `${h}h`);
  output.push(m === 0 ? null : `${m}m`);
  output.push(s === 0 ? null : `${s}s`);
  output.push(ms === 0 ? null : `${ms}ms`);
  output.push(output.filter(Boolean).length !== 0 ? null :'0s');

  return `${seconds < 0 ? '-' : ''}${isNaN(seconds) ? seconds : output.filter(Boolean).join(' ')}`;
}
