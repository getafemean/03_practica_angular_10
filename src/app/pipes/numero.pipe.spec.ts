import { NumeroPipe } from './numero.pipe';

describe('NumeroPipe', () => {
  it('create an instance', () => {
    const pipe = new NumeroPipe();
    expect(pipe).toBeTruthy();
  });
});
