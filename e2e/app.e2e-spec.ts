import { AppClientPage } from './app.po';

describe('app-client App', () => {
  let page: AppClientPage;

  beforeEach(() => {
    page = new AppClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
