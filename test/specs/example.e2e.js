import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';
import SecurePage from '../pageobjects/secure.page';

describe('Auth', () => {
    beforeEach( () => {
        browser.execute('window.localStorage.clear()');
        LoginPage.open();
        browser.refresh();

        afterEach( () => {
            import LoginPage from  '../pageobjects/login.page';
            import ProfilePage from '../pageobjects/profile.page';

            describe('Auth', () => {
                beforeEach(() => {
                    LoginPage.open();
                });

                afterEach(() => {
                    browser.execute('window.localStorage.clear()');
                });

                it('user logs in with valid data', () => {
                    LoginPage.setLogin('webomos801@ichkoch.com');
                    LoginPage.setPassword('Qwertyuio');
                    LoginPage.clickSubmitButton();
                    ProfilePage.isOpen();
                });

                it('submit button is disabled if login and password are absent', () => {
                    LoginPage.submitButtonIsDisabled();
                });

                it('fails if invalid data provided', () => {
                    LoginPage.setLogin('example@example.com');
                    LoginPage.setPassword('123456');
                    LoginPage.clickSubmitButton();
                    LoginPage.errorToastAppeared();
                });

                it('login input is required', () => {
                    LoginPage.setLogin('example');
                    LoginPage.emptyLoginInput();
                    LoginPage.loginRequiredError();
                });
            });


