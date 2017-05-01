import { AeqEsportsManagerPage } from './app.po';

describe('aeq-esports-manager App', () => {
  let page: AeqEsportsManagerPage;

  beforeEach(() => {
    page = new AeqEsportsManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
