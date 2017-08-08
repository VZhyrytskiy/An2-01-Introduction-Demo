import { An2TPage } from './app.po';

describe('an2-t App', () => {
  let page: An2TPage;

  beforeEach(() => {
    page = new An2TPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
