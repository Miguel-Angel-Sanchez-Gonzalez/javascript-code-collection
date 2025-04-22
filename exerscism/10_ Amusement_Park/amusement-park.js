// Solución al ejercicio de Exercism: "Amusement Park"
// Enunciado tomado de Exercism.org

export function createVisitor(name, age, ticketId) {
  return { name: name, age: age, ticketId: ticketId };
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  let status = "invalid";
  for (const key in tickets) {
    if (key === ticketId) {
      status = tickets[key];
    }
  }

  if (status === "invalid") {
    return "unknown ticket id";
  } else if (status === null) {
    return "not sold";
  }

  return `sold to ${status}`;
}

export function simpleTicketStatus(tickets, ticketId) {
  let simpleTicket;
  for (let key in tickets) {
    if (key === ticketId) {
      simpleTicket = tickets[key];
    }
  }
  simpleTicket = simpleTicket ?? "invalid ticket !!!";
  return simpleTicket;
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}

// Test cases

console.log(createVisitor("Verena Nardi", 45, "H32AZ123"));

const visitor = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};

console.log(revokeTicket(visitor));

const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};

console.log(ticketStatus(tickets, "RE90VAW7"));
console.log(ticketStatus(tickets, "0H2AZ123"));
console.log(ticketStatus(tickets, "23LA9T41"));

console.log(simpleTicketStatus(tickets, "23LA9T41"));

// => 'Verena Nardi'

console.log(simpleTicketStatus(tickets, "0H2AZ123"));
console.log(simpleTicketStatus(tickets, "RE90VAW7"));

// => 'invalid ticket !!!'

const visitorNew = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
};

console.log(gtcVersion(visitorNew));

// => '2.1'

const visitorOld = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};

console.log(gtcVersion(visitorOld));
