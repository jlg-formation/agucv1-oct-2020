import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });

  it('do the ellipsis (>10)', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform('Tournevis cruciforme');
    expect(result).toBe('Tournevis ...');
  });
  it('do the ellipsis (>15)', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform('Tournevis cruciforme', 15);
    expect(result).toBe('Tournevis cruci...');
  });
  it('do no ellipsis (>15)', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform('Tournevis', 15);
    expect(result).toBe('Tournevis');
  });
  it('do no error and send empty string', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform(undefined);
    expect(result).toBe('');
  });
});
