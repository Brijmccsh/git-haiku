const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

function countSyllables(word) {
  // Simple syllable counting: This could be improved with an actual syllable library.
  return word.match(/[aeiouy]+/g)?.length || 1;
}

function generateHaiku(commits) {
  const words = tokenizer.tokenize(commits.join(' '));

  // Haiku structure: 5-7-5 syllables.
  let haiku = '';
  let syllableCount = 0;
  const haikuStructure = [5, 7, 5];
  let currentLine = 0;

  for (const word of words) {
    const syllables = countSyllables(word);
    if (syllableCount + syllables <= haikuStructure[currentLine]) {
      haiku += word + ' ';
      syllableCount += syllables;
    } else {
      haiku += '\n';
      currentLine++;
      if (currentLine >= haikuStructure.length) break;
      syllableCount = 0;
    }
  }

  return haiku.trim();
}

module.exports = { generateHaiku };
