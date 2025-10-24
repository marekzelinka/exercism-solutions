//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function chunkString(string, size) {
  const chunks = [];
  
  for (let i = 0; i < string.length; i += size) {
    chunks.push(string.slice(i, i + size));
  }

  return chunks;
}

export const translate = (sequence = '') => {
  const translations = [];

  const sequences = chunkString(sequence, 3);

  for (const sequence of sequences) {
    if (["UAA", "UAG", "UGA"].includes(sequence)) {
      break;
    }

    switch (sequence) {
      case 'AUG': {
        translations.push("Methionine");

        break
      }
      case 'UUU':
      case "UUC": {
        translations.push("Phenylalanine");

        break;
      }
      case "UUA":
      case "UUG": {
        translations.push("Leucine");

        break;
      }	
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG": {
        translations.push("Serine");

        break;
      }
      case "UAU":
      case "UAC": {
        translations.push("Tyrosine");

        break;
      }
      case "UGU":
      case "UGC":	{
        translations.push("Cysteine");

        break;
      }
      case "UGG": {
        translations.push("Tryptophan");

        break;
      }
      default: {
        throw new Error("Invalid codon");
      }
    }
  }

  return translations;
};
