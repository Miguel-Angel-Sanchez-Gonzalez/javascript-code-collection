// Solución al ejercicio de Exercism: "Diffie-Hellman"
// Enunciado tomado de Exercism.org

export class DiffieHellman {
  constructor(p, g) {
    if (p <= 0 || g <= 0 || p >= 9999 || g >= 9999)
      throw new Error("The constructor arguments are out of range");

    if (!isPrimo(p) || !isPrimo(g))
      throw new Error("The constructor arguments are not prime");

    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1) throw new Error("Private key is less or equal than 1");

    if (privateKey >= this.p)
      throw new Error("Private key is greater or equal than p");

    return Math.pow(this.g, privateKey) % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p;
  }

  static getPrivateKey(p) {
    return Math.floor(Math.random() * (p - 2)) + 2;
  }
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

// Test cases
const diffieHellman = new DiffieHellman(23, 5);
const alicePrivateKey = 6;
const bobPrivateKey = 15;
const alicePublicKey = diffieHellman.getPublicKey(alicePrivateKey);
const bobPublicKey = diffieHellman.getPublicKey(bobPrivateKey);
const secretA = diffieHellman.getSecret(bobPublicKey, alicePrivateKey);
const secretB = diffieHellman.getSecret(alicePublicKey, bobPrivateKey);
console.log(secretA);
console.log(secretB);
