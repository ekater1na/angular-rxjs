import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

describe('ConvertToSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToSpacesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should replase dash to space', () => {
    let pipe = new ConvertToSpacesPipe();
    let value = 'gdn-0011'

    let val = pipe.transform(value, '-');

    expect(val).toEqual('gdn 0011');
  })
});
