// Solución al ejercicio de Exercism: "Appointment-time"
// Enunciado tomado de Exercism.org

export const createAppointment = (days, now = Date.now()) =>
  new Date((now instanceof Date ? now.getTime() : now) + 86_400_000 * days);

export const getAppointmentTimestamp = (appointmentDate) =>
  appointmentDate.toISOString();

/**
 * Get details of an appointment
 * @param {string} timestamp (ISO 8601)
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  throw new Error("Remove this line and implement the function");
}

/**
 * Update an appointment with given options
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  throw new Error("Remove this line and implement the function");
}

/**
 * Get available time in seconds (rounded) between two appointments
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  throw new Error("Remove this line and implement the function");
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
const startDate = new Date("2022-10-05T23:28:43+06:00");
const result = createAppointment(4, startDate);
console.log(result);

const appointment = new Date(Date.UTC(2010, 6, 16, 12, 42, 0, 0));
const result2 = getAppointmentTimestamp(appointment);
console.log(result2);
