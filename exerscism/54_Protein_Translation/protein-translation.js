// Solución al ejercicio de Exercism: "Protein Translation"
// Enunciado tomado de Exercism.org

export const translate = (codons) => {
  let proteinsResult = [];
  if (codons === undefined) {
    return proteinsResult;
  }

  const aminoAcids = {
    Methionine: ["AUG"],
    Phenylalanine: ["UUU", "UUC"],
    Leucine: ["UUA", "UUG"],
    Serine: ["UCU", "UCC", "UCA", "UCG"],
    Tyrosine: ["UAU", "UAC"],
    Cysteine: ["UGU", "UGC"],
    Tryptophan: ["UGG"],
    STOP: ["UAA", "UAG", "UGA"],
  };

  const splitSequenceRNA = [];
  for (let i = 0; i < codons.length; i += 3) {
    splitSequenceRNA.push(codons.slice(i, i + 3));
  }

  for (const rna of splitSequenceRNA) {
    for (const key in aminoAcids) {
      let currentAminoAcid = aminoAcids[key];
      if (currentAminoAcid.includes(rna)) {
        if (key === "STOP") {
          return proteinsResult;
        } else {
          proteinsResult.push(key);
        }
      }
    }
  }

  if (proteinsResult.length === 0 || codons.length % 3 !== 0) {
    throw new Error("'Invalid codon'");
  }

  return proteinsResult;
};

// Test cases
console.log(translate());
console.log(translate("AUGUUUUCUUAAAUG"));
console.log(translate("UUUUUU"));
console.log(translate("UUAUUG"));
console.log(translate("AUGUUUUGG"));
console.log(translate("UAGUGG"));
console.log(translate("AUGUUUUAA"));
console.log(translate("UGGUAGUGG"));
console.log(translate("UGGUGUUAUUAAUGGUUU"));
console.log(translate("XYZ"));
console.log(translate("UUCUUCUAAUGGU"));
console.log(translate("AUGU"));
