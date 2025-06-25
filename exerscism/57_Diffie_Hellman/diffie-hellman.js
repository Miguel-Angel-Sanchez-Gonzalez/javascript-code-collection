// Solución al ejercicio de Exercism: "Diffie-Hellman"
// Enunciado tomado de Exercism.org

export class DiffieHellman {
  constructor(p, g) {
    if (!esPrimo(p) || !esPrimo(g))
      throw new Error("The constructor arguments are not prime");

    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {}

  getSecret(theirPublicKey, myPrivateKey) {}

  getPrivateKey() {}
}

export function esPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Test cases
new DiffieHellman(10, 13);
