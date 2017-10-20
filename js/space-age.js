export class SpaceAge {
  constructor(birthday, planet) {
    this.age = 0;
    this.birthday = birthday;
    this.planet = planet;
  }

  // convert age (in years) to seconds
  ageToSeconds() {
    return 31536000 * this.age;
  }

  // calculate age on Earth in seconds
  humanYears() {
    let birthYear = parseInt(this.birthday);
    let today = new Date().getFullYear();
    this.age = today - birthYear;
    return this.age
  }

  // calculate age on Mercury
  mercurianYears() {
    return Math.floor(parseFloat(this.age/0.24));
  }

  // calculate age on Venus
  venusianYears() {
    return Math.floor(parseFloat(this.age/0.62));
  }

  // calculate age on Mars
  martianYears() {
    return Math.floor(parseFloat(this.age/1.88));
  }

  // calculate age on Jupiter
  jovianYears() {
    return Math.floor(parseFloat(this.age/11.86));
  }

  // calculate planetary life expectancy
  planetaryExpectancy() {
    if (this.planet === "Mercury") {
      return (295 - parseFloat(this.age/0.24));
    }
    else if (this.planet === "Venus") {
      return (114 - parseFloat(this.age/0.62));
    }
    else if (this.planet === "Mars") {
      return (37 - parseFloat(this.age/0.62));
    }
    else if (this.planet === "Jupiter") {
      return (5 - parseFloat(this.age/0.62));
    }
    else {
      return (71 - this.age);
    }
  }

  //calculate planetary excess of life expectancy
  surpassesExpectancy() {
    if (this.age > 71) {
      return "You're no spring chicken, but you've got grit!";
    } else {
      return `Don't worry, you're not expected to be pushing moon rocks for another ${71 - this.age} years.`;
    }
  }
}
