class Song {
  constructor(name, artist) {
    this.name = name;
    this.artist = artist;
  }
  howMany(a) {
    return a.length;
  }
}

const check = new Song("hek", "hjgk");

console.log(check);

check.howMany(["a", "df", "sd"]);

console.log(check);
