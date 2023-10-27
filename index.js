/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(array) {
  return array.map(createEmployeeRecord);
}

// function createTimeInEvent(dateRecord) {
//   let dateStamp = dateRecord.split("");
//   this.timeInEvents.push({
//     type: "TimeIn",
//     hour: dateStamp[1],
//     date,
//   });
//   return this;
// }

// function createTimeOutEvent(dateRecord) {
//   let dateStamp = dateRecord.split("");
//   this.timeOutEvents.push({
//     type: "TimeOut",
//     hour: dateStamp[1],
//     date,
//   });
//   return this;
// }

function createTimeInEvent(dateStamp) {
  let [date, time] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(time),
    date,
  });
  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, time] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(time),
    date,
  });
  return this;
}
//=================================================

// function hoursWorkedOnDate(date){
//  timeInEvent = this.timeInEvents
// }
function hoursWorkedOnDate(date) {
  let timeInEvent = this.timeInEvents.find((event) => event.date === date);
  let timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
  if (timeInEvent && timeOutEvent) {
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  } else {
    return 0;
  }
}

function wagesEarnedOnDate(date) {
  let hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

function allWages4() {
  let daysWorked = this.timeInEvents.map((e) => {
    return e.date;
  });
  let payable = daysWorked.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  );
  return payable;
}

function calculatePayroll(employees) {
  return employees.reduce(
    (total, employee) => total + allWages4.call(employee),
    0
  );
}

function findEmployeeByFirstName(collection, firstName) {
  return collection.find((employee) => employee.firstName === firstName);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
