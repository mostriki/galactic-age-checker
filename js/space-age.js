export class SpaceAge {
  constructor(birthday) {
    this.age = age;
  }

  // convert age (in years) to seconds
  ageToSeconds(years) => {

  }
  // calculate age on Earth in seconds
  humanYears(years) => {

  }
  // calculate age on Mercury
  mercurianYears(years) => {
    return parseFloat((years/0.24).toFixed(1));
  }
  // calculate age on Venus
  venusianYears(years) => {
    return parseFloat((years/0.62).toFixed(1));
  }
  // calculate age on Mars
  martianYears(years) => {
    return parseFloat((years/1.88).toFixed(1));
  }
  // calculate age on Jupiter
  jovianYears(years) => {
    return parseFloat((years/11.86).toFixed(1));
  }
  //calculate planetary life expectancy
  lifeExpectancy () => {

  }

  // account for (and test) if person exceeds avg. life expectancy
}
