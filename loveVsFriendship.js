function wordsToMarks(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let marks = 0;
    string.split('').forEach((char) => {
      marks += alphabet.indexOf(char) + 1;
    });
    return marks;
  }