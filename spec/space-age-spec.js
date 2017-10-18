import { SpaceAge } from './../js/space-age.js';

describe('SpaceAge', () => {
  let input;

  beforeEach(() => {
    input = new SpaceAge();
    input.age = "30";
    input.birthday = new Date("May 29, 1987 00:00:00");
    input.planet = "Mercury";
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
    expect(input.mercurianYears()).toEqual(125);
  });

  it('should calculate your age in Martian Sols.', () => {
    expect(input.venusianYears()).toEqual(48);
  });

  it('should calculate your age in Martian Sols.', () => {
    expect(input.martianYears()).toEqual(15);
  });

  it('should calculate your age in Martian Sols.', () => {
    expect(input.jovianYears()).toEqual(2);
  });

  it('should return the users avg. life expectancy on planet earth', () => {
    expect(input.earthExpectancy).toEqual(71);
  });

  it('should calculate how many years a user has left to live on Mercury', () => {
    expect(input.planetaryExpectancy()).toEqual(170);
  });

  it('should calculate how many years a user has left to live on Earth', () => {
    expect(input.surpassesExpectancy()).toEqual("Don't worry, you're not pushing daisies yet.");
  });
});
