function breakAfterSpaces(text, numOfSpaces) {
  const matches = text.match(/\s/g);
  if( matches && numOfSpaces > matches.length) {
    return text;
  }
  if (matches && numOfSpaces <= matches.length) {
    const whiteSpaceIndexes = [];
    for (let i = 0; i < text.length; i++) {
      if (/\s/.test(text[i])) {
        whiteSpaceIndexes.push(i);
      }
    }
    const newText = text
      .split("")
      .map((char, index) => {
        if (
          whiteSpaceIndexes.includes(index) &&
          whiteSpaceIndexes.indexOf(index) % numOfSpaces === numOfSpaces - 1
        ) {
          return char + "\n";
        } else {
          return char;
        }
      })
      .join("");
    return newText;
  }
}

export { breakAfterSpaces };
