const {user_email, user_password} = require('../../config.user')

describe('gmail sign in', ()=>{
    it('should pass with email and password', async()=>{ 
        await browser.url('https://www.google.com/intl/ru/gmail/about/');
        await $('[data-action="sign in"]').click();
    
        await $('[type="email"]').setValue(user_email);
        await $('[id="identifierNext"] button').click();
    
        const elem_pass = await $('[type="password"]');
        await elem_pass.waitForDisplayed({timeout:10000, interval:500})
        await elem_pass.setValue(user_password);
        await $('[id="passwordNext"] [type="button"]').click();
    
        const write_button = await $('[id=":32"]');
        await expect(write_button).toHaveTextContaining('Написать');
    })
})
