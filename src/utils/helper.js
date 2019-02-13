import Shifts from "../mockdata/shifts";

export function getEmployeeById(id) {
  return Shifts.filter(shift => shift.employee_id === id);
}

export function getFirstShiftDate() {
  return new Date(Shifts[0].start_time);
}

export function getFirstShiftDay() {
  return new Date(Shifts[0].start_time).getDate();
}

export function getDays(employees) {
  const days = [];
  for (let i = 0; i < employees.length; i++) {
    days.push(getDay(employees[i].start_time));
  }

  return days;
}

function getDay(time) {
  return new Date(time).getDate();
}