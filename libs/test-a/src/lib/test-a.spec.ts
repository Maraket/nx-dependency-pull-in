import { testA } from './test-a';
import { testB } from 'test-b';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _testB = testB();
console.log(_testB);
describe('testA', () => {
  it('should work', () => {
    expect(testA()).toEqual('test-a');
  });
});
