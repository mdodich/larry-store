import { LarrystorePage } from './app.po';

describe('larrystore App', () => {
  let page: LarrystorePage;

  beforeEach(() => {
    page = new LarrystorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
