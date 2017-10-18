export class SpaceAge {
  constructor(age, birthday, yearToSeconds, avgEarthLife) {
    this.age = age;
    this.birthday = birthday;
    this.yearToSeconds = 31536000;
    this.earthExpectancy = 71;
    // this.femaleExpectancy = 71;
    // this.maleExpectancy = 67;
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

  //calculate planetary life expectancy
  // mercurianExpectancy() {
  //   if (this.avgExpectancy > this.age) {
  //     return "Congratulations! I don't know how you did it, but you are the first human to survive a lifetime in space."
  //   } else {
  //     "If you managed to stay concious and survive the bursting of your skin's small blood vessels, you could live to a ripe old age of " + mercurianYears(this.avgExpectancy) + " sols."
  //   }
  // }

  //calculate planetary excess of life expectancy
  surpassesExpectancy(age, expectancy) {
    if (parseInt(age) > parseInt(expectancy)) {
      return "You're no spring chicken, but you've got grit!";
    } else {
      return "Don't worry, you're not pushing daisys yet.";
    }
  }
}
