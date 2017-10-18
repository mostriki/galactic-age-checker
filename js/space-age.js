export class SpaceAge {
  constructor(age, birthday, planet) {
    this.age = age;
    this.birthday = birthday;
    this.planet = planet;
    this.yearToSeconds = 31536000;
    this.earthExpectancy = 71;
    this.mercurianExpectancy = 295;
    this.venusianExpectancy = 114;
    this.martianExpectancy = 37;
    this.jovianExpectancy = 5;
  }

  // convert age (in years) to seconds
  ageToSeconds() {
    return this.yearToSeconds * this.age;
  }

  // calculate age on Earth in seconds
  humanYears() {
    let age;

    let today = new Date();
    return age = Math.floor((today - this.birthday)/1000/60/60/24/365);
  }

  // calculate age on Mercury
  mercurianYears(years) {
    return Math.floor(parseFloat(years/0.24));
  }

  // calculate age on Venus
  venusianYears(years) {
    return Math.floor(parseFloat(years/0.62));
  }

  // calculate age on Mars
  martianYears(years) {
    return Math.floor(parseFloat(years/1.88));
  }

  // calculate age on Jupiter
  jovianYears(years) {
    return Math.floor(parseFloat(years/11.86));
  }

  // calculate planetary life expectancy
  planetaryExpectancy() {
    if (this.planet == "Mercury") {
      return (this.mercuryExpectancy - parseFloat(this.age/0.24));
    }
    else if (this.planet == "Venus") {
      return (this.venusianExpectancy - parseFloat(this.age/0.62));
    }
    else if (this.planet == "Mars") {
      return (this.martianExpectancy - parseFloat(this.age/0.62));
    }
    else if (this.planet == "Jupiter") {
      return (this.jovianExpectancy - parseFloat(this.age/0.62));
    }
    else {
      return (this.earthExpectancy - this.age);
    }
  }

  //calculate planetary excess of life expectancy
  surpassesExpectancy(age, expectancy) {
    if (parseInt(age) > parseInt(expectancy)) {
      return "You're no spring chicken, but you've got grit!";
    } else {
      return "Don't worry, you're not pushing daisies yet.";
    }
  }
}
