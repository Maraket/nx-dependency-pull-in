import { testA } from 'test-a';
import { testB } from 'test-b';

describe('mainA', () => {
  it('should work for A', () => {
    expect(testA()).toEqual('test-a');
  });
  it('should work for B', () => {
    expect(testB()).toEqual('test-b');
  });
});
