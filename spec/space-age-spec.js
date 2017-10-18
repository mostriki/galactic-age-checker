import { SpaceAge } from './../js/space-age.js';

describe('SpaceAge', () => {
  let input;

  beforeEach(() => {
    input = new SpaceAge();
    input.age = "30";
    input.birthday = new Date("May 29, 1987 00:00:00");
  });

  it('should return a single year in seconds', () => {
    expect(input.yearToSeconds).toEqual(31536000);
  });

  it('should convert age to seconds', () => {
    expect(input.ageToSeconds()).toEqual(946080000);
  });

  it('should calculate a users age from 2 dates', () => {
    expect(input.humanYears()).toEqual(30);
  });

  it('should return the users age in years', () => {
    expect(input.age).toEqual("30");
  });


  it('should calculate your age in Martian Sols.', () => {
    expect(input.mercurianYears("30")).toEqual(125);
  });

  it('should calculate your age in Martian Sols.', () => {
    expect(input.venusianYears("30")).toEqual(48);
  });

  it('should calculate your age in Martian Sols.', () => {
    expect(input.martianYears("30")).toEqual(15);
  });

  it('should calculate your age in Martian Sols.', () => {
    expect(input.jovianYears("30")).toEqual(2);
  });

  it('should return the users avg. life expectancy on planet earth', () => {
    expect(input.earthExpectancy).toEqual(71);
  });

  it('should calculate how many years a user has left to live on Earth', () => {
    expect(input.surpassesExpectancy("30", "71")).toEqual("Don't worry, you're not pushing daisys yet.");
  });

  // it('should calculate how many years a user has left to live on Mercury', () => {
  //   expect(input.mercurianExpectancy()).toEqual("If you managed to stay concious and survive the bursting of your skin's small blood vessels, you could live to a ripe old age of 7 sols.");
  // });
});
