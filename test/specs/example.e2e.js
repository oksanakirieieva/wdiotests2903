import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';
import SecurePage from '../pageobjects/secure.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin(webomos801@ichkoch.com);
        LoginPage.setPassword('Andriy7770202');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();



    });
});


