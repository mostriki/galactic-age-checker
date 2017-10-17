import { SpaceAge } from './../js/space-age.js';

describe('SpaceAge', function() {

  // beforeEach(function() {
  //   let input = new SpaceAge();
  // });

  it('should calculate your age in Martian Sols.', function() {
    let input = new SpaceAge(30);
    expect(input.mercurianYears()).toEqual(125);
  });

  it('should calculate your age in Martian Sols.', function() {
    let input = new SpaceAge(30);
    expect(input.venusianYears()).toEqual(48.4);
  });

  it('should calculate your age in Martian Sols.', function() {
    let input = new SpaceAge(30);
    expect(input.martianYears()).toEqual(16);
  });

  it('should calculate your age in Martian Sols.', function() {
    let input = new SpaceAge(30);
    expect(input.jovianYears()).toEqual(2.5);
  });

});
