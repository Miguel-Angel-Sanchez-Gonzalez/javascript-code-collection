// Solución al ejercicio de Exercism: "Anagram"
// Enunciado tomado de Exercism.org

export const findAnagrams = (target, candidateWords) => {
  const anagrams = [];
  for (const candidate of candidateWords) {
    if (target.length !== candidate.length) {
      continue;
    } else {
      if (candidate.toLowerCase() === target.toLowerCase()) {
        continue;
      } else {
        const splitTarget = target.toLowerCase().split("");
        let splitCandidate = candidate.toLowerCase().split("");
        for (let i = 0; i < splitTarget.length; i++) {
          const indice = splitCandidate.indexOf(splitTarget[i]);
          if (indice === -1) {
            break;
          } else {
            splitCandidate.splice(indice, 1);
          }
        }
        if (splitCandidate.length === 0) {
          anagrams.push(candidate);
        }
      }
    }
  }

  return anagrams;
};

// Test cases
console.log(findAnagrams("diaper", ["hello", "world", "zombies", "pants"]));
console.log(findAnagrams("solemn", ["lemons", "cherry", "melons"]));
console.log(
  findAnagrams("stone", ["stone", "tones", "banana", "tons", "notes", "Seton"])
);
console.log(findAnagrams("good", ["dog", "goody"]));
console.log(findAnagrams("listen", ["enlists", "google", "inlets", "banana"]));
console.log(
  findAnagrams("allergy", [
    "gallery",
    "ballerina",
    "regally",
    "clergy",
    "largely",
    "leading",
  ])
);
console.log(findAnagrams("nose", ["Eons", "ONES"]));
console.log(findAnagrams("mass", ["last"]));
console.log(
  findAnagrams("Orchestra", ["cashregister", "Carthorse", "radishes"])
);
console.log(
  findAnagrams("Orchestra", ["cashregister", "carthorse", "radishes"])
);
console.log(
  findAnagrams("orchestra", ["cashregister", "Carthorse", "radishes"])
);
console.log(findAnagrams("go", ["goGoGO"]));
console.log(findAnagrams("tapper", ["patter"]));
console.log(findAnagrams("BANANA", ["BANANA"]));
console.log(findAnagrams("BANANA", ["Banana"]));
console.log(findAnagrams("BANANA", ["banana"]));
console.log(findAnagrams("LISTEN", ["LISTEN", "Silent"]));
console.log(findAnagrams("ΑΒΓ", ["ΒΓΑ", "ΒΓΔ", "γβα", "αβγ"]));
console.log(findAnagrams("a⬂", ["€a"]));
