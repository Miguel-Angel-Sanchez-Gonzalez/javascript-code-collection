// Solución al ejercicio de Exercism: "Appointment-time"
// Enunciado tomado de Exercism.org

export const createAppointment = (days, now = Date.now()) =>
  new Date((now instanceof Date ? now.getTime() : now) + 86_400_000 * days);

export const getAppointmentTimestamp = (appointmentDate) =>
  appointmentDate.toISOString();

export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp);

  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);

  for (const key in options) {
    const value = options[key];

    switch (key) {
      case "year":
        date.setFullYear(value);
        break;
      case "month":
        date.setMonth(value);
        break;
      case "date":
        date.setDate(value);
        break;
      case "hour":
        date.setHours(value);
        break;
      case "minute":
        date.setMinutes(value);
        break;
    }
  }

  return getAppointmentDetails(date.toISOString());
}

export function timeBetween(timestampA, timestampB) {
  return Math.round(
    Math.abs(new Date(timestampA) - new Date(timestampB)) / 1000
  );
}

export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(appointmentTimestamp) - new Date(currentTimestamp) > 0
    ? true
    : false;
}

// Test cases
const startDate = new Date("2022-10-05T23:28:43+06:00");
const result = createAppointment(4, startDate);
console.log(result);

const appointment = new Date(Date.UTC(2010, 6, 16, 12, 42, 0, 0));
const result2 = getAppointmentTimestamp(appointment);
console.log(result2);

console.log(getAppointmentDetails("2022-02-09T09:20:00.000"));

console.log(updateAppointment("2022-02-09T09:20:00.000", { month: 6 }));

console.log(timeBetween("2022-12-12T09:20:00.000", "2022-12-18T08:30:00.000"));
console.log(isValid("2022-02-11T23:00:00.000", "2022-02-08T23:00:00.000"));
