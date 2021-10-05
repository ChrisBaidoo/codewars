class Song {
  constructor(name, artist) {
    this.name = name;
    this.artist = artist;
    this.listener = new Set();
  }
  howMany(people) {
    let listenerSize = this.listener.size;
    let q = people.map((a) => {
      return a.toLowerCase();
    });
    console.log(q);
    this.listener.add(q.join(", "));
    console.log(this.listener);

    return this.listener.size - listenerSize;
  }
}
