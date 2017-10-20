import { SpaceAge } from './../js/space-age.js';

describe('SpaceAge', () => {
  let input;

  beforeEach(() => {
    input = new SpaceAge("1987-05-29");
    // input.age = "30";
    // input.birthday = new Date("1987-05-29");
    // input.planet = "Mercury";
  });

  it('should convert age to seconds', () => {
    expect(input.ageToSeconds()).toEqual(946080000);
  });

  it('should calculate a users age from 2 dates', () => {
    expect(input.humanYears()).toEqual(30);
  });

  it('should return the users age in years', () => {
    expect(input.humanYears()).toEqual(30);
  });

  it('should calculate your age in Mercurian sols.', () => {
    expect(input.mercurianYears()).toEqual(125);
  });

  it('should calculate your age in Venusian sols.', () => {
    expect(input.venusianYears()).toEqual(48);
  });

  it('should calculate your age in Martian sols.', () => {
    expect(input.martianYears()).toEqual(15);
  });

  it('should calculate your age in Jovian sols.', () => {
    expect(input.jovianYears()).toEqual(2);
  });

  it('should calculate how many years a user has left to live on Mercury', () => {
    expect(input.planetaryExpectancy()).toEqual(170);
  });

  it('should calculate how many years a user has left to live on Earth', () => {
    expect(input.surpassesExpectancy()).toEqual(`Don't worry, you're not expected to be pushing moon rocks for another ${71 - input.age} years.`);
  });
});
