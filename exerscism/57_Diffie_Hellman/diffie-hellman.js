// Solución al ejercicio de Exercism: "Diffie-Hellman"
// Enunciado tomado de Exercism.org

export class DiffieHellman {
  constructor(p, g) {
    if (!isPrimo(p) || !isPrimo(g))
      throw new Error("The constructor arguments are not prime");

    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {}

  getSecret(theirPublicKey, myPrivateKey) {}

  getPrivateKey() {}
}

export function isPrimo(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

isPrimo(7919);

// Test cases
new DiffieHellman(10, 13);
