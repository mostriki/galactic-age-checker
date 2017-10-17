export class SpaceAge {
  constructor(age) {
    this.age = age;
  }

  // convert age (in years) to seconds
  ageToSeconds() {

  }
  // calculate age on Earth in seconds
  humanYears() {

  }
  // calculate age on Mercury
  mercurianYears() {
    return parseFloat((this.age/0.24).toFixed(1));
  }
  // calculate age on Venus
  venusianYears() {
    return parseFloat((this.age/0.62).toFixed(1));
  }
  // calculate age on Mars
  martianYears() {
    return parseFloat((this.age/1.88).toFixed(1));
  }
  // calculate age on Jupiter
  jovianYears() {
    return parseFloat((this.age/11.86).toFixed(1));
  }
  //calculate planetary life expectancy
  lifeExpectancy () {

  }

  // account for (and test) if person exceeds avg. life expectancy
}
