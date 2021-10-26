class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.crewWeight = this.crew * 1.5;
  }

  isWorthIt() {
    return this.draft - this.crewWeight > 20;
  }
}
