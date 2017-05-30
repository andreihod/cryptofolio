import { AsstsPage } from './app.po';

describe('assts App', () => {
  let page: AsstsPage;

  beforeEach(() => {
    page = new AsstsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
