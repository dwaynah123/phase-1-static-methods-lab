class Formatter {
  static capitalize(word) {
    return word.charAt(0).toUpperCase() +  word.slice(1);
  }
  static sanitize(word) {
    word = word.replaceAll(/[^a-zA-Z0-9 '-]/g, "");
    return word.replaceAll("!", "");
  }
  static titleize(title){
    title = title.charAt(0).toUpperCase() +  title.slice(1);
    const words = title.split(" ");
    for(let i = 0; i < words.length; i++) {
      if(words[i] !== "the" && words[i] !== "a" && words[i] !== "an" && words[i] !== "but" && words[i] !== "of" && words[i] !== "and" && words[i] !== "for" && words[i] !== "at" && words[i] !== "by" && words[i] !== "from"){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }
    title = words.toString();
    return title.replaceAll(",", " ")

  }
}