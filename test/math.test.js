import assert from 'assert';
import { sum } from '../src/math.js';

describe('Just to be sure tests are running', () => {
  describe('Sum', () => {
    it('should sum parameters', () => {
      assert.equal(sum(5)(9), 14);
    });
  });
});
