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
  const secondsDateA = new Date(timestampA).getTime();
  const secondsDateB = new Date(timestampB).getTime();

  let secondsOfDifference =
    secondsDateA > secondsDateB
      ? secondsDateA - secondsDateB
      : secondsDateB - secondsDateA;

  return Math.round(secondsOfDifference / 1000);
}

/**
 * Get available times between two appointment
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  throw new Error("Remove this line and implement the function");
}

// Test cases
// const startDate = new Date("2022-10-05T23:28:43+06:00");
// const result = createAppointment(4, startDate);
// console.log(result);

// const appointment = new Date(Date.UTC(2010, 6, 16, 12, 42, 0, 0));
// const result2 = getAppointmentTimestamp(appointment);
// console.log(result2);

// console.log(getAppointmentDetails("2022-02-09T09:20:00.000"));

// console.log(updateAppointment("2022-02-09T09:20:00.000", { month: 6 }));

console.log(timeBetween("2022-12-12T09:20:00.000", "2022-12-18T08:30:00.000"));
