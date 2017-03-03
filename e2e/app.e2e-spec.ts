import { AngularIntroductionPage } from './app.po';

describe('angular-introduction App', () => {
  let page: AngularIntroductionPage;

  beforeEach(() => {
    page = new AngularIntroductionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
