export class SpaceAge {
  constructor(birthday, planet) {
    this.age = 0;
    this.birthday = birthday;
    this.planet = planet;
    this.mercurianExpectancy = 295;
    this.venusianExpectancy = 114;
    this.martianExpectancy = 37;
    this.jovianExpectancy = 5;
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
      return (this.mercurianExpectancy - parseFloat(this.age/0.24));
    }
    else if (this.planet === "Venus") {
      return (this.venusianExpectancy - parseFloat(this.age/0.62));
    }
    else if (this.planet === "Mars") {
      return (this.martianExpectancy - parseFloat(this.age/0.62));
    }
    else if (this.planet === "Jupiter") {
      return (this.jovianExpectancy - parseFloat(this.age/0.62));
    }
    else {
      return (this.earthExpectancy - this.age);
    }
  }

  //calculate planetary excess of life expectancy
  surpassesExpectancy() {
    if (this.age > 71) {
      return "You're no spring chicken, but you've got grit!";
    } else {
      return "Don't worry, you're not pushing daisies yet.";
    }
  }
}
