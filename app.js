const express = require("express");
const addDays = require("date-fns/addDays");

const add = express();

add.get("/", (request, response) => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();

  const newDate = addDays(new Date(year, month, date), 100);
  let newYear = newDate.getFullYear();
  let newMonth = newDate.getMonth()+1;
  let newDay = newDate.getDate();

  response.send(`${newDay}/${newMonth}/${newYear}`);
});

add.listen(3000);

module.exports = add;
