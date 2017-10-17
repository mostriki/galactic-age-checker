export class SpaceAge {
  constructor(age) {
    this.age = age;
    // this.years = years;
  }

  // convert age (in years) to seconds
  ageToSeconds() {

  }

  // calculate age on Earth in seconds
  humanYears() {

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

  //calculate planetary life expectancy on Earth
  lifeExpectancy() {

  }

  // account for (and test) if person exceeds avg. life expectancy
  avgLifeExpectancy() {

  }
}
