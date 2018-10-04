/* eslint-disable no-undef */
import { random } from '../../helpers';

describe('Generate random number', () => {
  it('should generate a number between 0 and 2', () => {
    const number = random(2);
    expect(number >= 0 && number <= 2).toBe(true);
  });

  it('should generate 0', () => {
    expect(random(0)).toBe(0);
  });
});
