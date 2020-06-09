import wordList from "../assets/word_list.json";

function getWords(nb: number): Array<string> {
  let words: Array<string> = [];
  while (words.length < nb) {
    let index = Math.round(Math.random() * wordList.length);
    let word = wordList[index];
    if (words.indexOf(word) === -1) {
      words.push(word);
    }
  }
  return words;
}

export { getWords };
