const timer = () =>
  new Date().getDate() +
  "." +
  (new Date().getMonth() + 1) +
  "." +
  new Date().getFullYear() +
  " " +
  (new Date().getHours() < 10
    ? "0" + new Date().getHours()
    : new Date().getHours()) +
  "." +
  (new Date().getMinutes() < 10
    ? "0" + new Date().getMinutes() + " h"
    : new Date().getMinutes() + " h");

export default timer;
