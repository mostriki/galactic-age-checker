export class SpaceAge {
  constructor(age, years) {
    this.years = years;
    this.yearToSeconds = 31536000;

  }

  // convert age (in years) to seconds
  ageToSeconds() {
    return Math.floor(this.yearToSeconds * this.years);
  }

  // calculate age on Earth in seconds
  humanYears() {

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

  //calculate planetary life expectancy on Earth
  lifeExpectancy() {

  }

  // account for (and test) if person exceeds avg. life expectancy
  avgLifeExpectancy() {

  }
}
