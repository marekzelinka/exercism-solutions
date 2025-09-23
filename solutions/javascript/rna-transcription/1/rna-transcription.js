//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DNA_TO_RNA = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export const toRna = (dnaSequence) => {
  if (dnaSequence.length > 1) {
    return dnaSequence.split('').map(nucleotide => DNA_TO_RNA[nucleotide]).join('')
  }

  return DNA_TO_RNA[dnaSequence] ?? '';
};
