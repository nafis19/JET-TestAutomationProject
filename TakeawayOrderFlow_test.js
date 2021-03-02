Feature('TakeawayOrderFlow');

Scenario('1.Verify webpage present', ({ I }) => {

    I.amOnPage('/');
    I.see('Czas zamówić jedzenie', 'h1');

});

Scenario('2.Verify search works', ({ I }) => {

    I.amOnPage('/');
    I.fillField({xpath: '//*[@id="imysearchstring"]'}, 'Dłusko 12, 78-630 Dłusko')
    I.click({xpath: '//*[@id="iautoCompleteDropDownContent"]/a'})
    I.waitForText('TEST Restaurant Selenium',20);

});

Scenario('3.Verify restaurant selection', ({ I }) => {

    I.amOnPage('/');
    I.fillField({xpath: '//*[@id="imysearchstring"]'}, 'Dłusko 12, 78-630 Dłusko')
    I.click({xpath: '//*[@id="iautoCompleteDropDownContent"]/a'})
    I.waitForText('TEST Restaurant Selenium',10)
    I.click('TEST Restaurant Selenium')
    I.seeInCurrentUrl('/menu/test-restaurant-selenium')
});


Scenario('4.Verify adding order', ({ I }) => {

    I.amOnPage('/');
    I.fillField({ xpath: '//*[@id="imysearchstring"]' }, 'Dłusko 12, 78-630 Dłusko');
    I.click({ xpath: '//*[@id="iautoCompleteDropDownContent"]/a' });
    I.waitForText('TEST Restaurant Selenium',10)
    I.click('TEST Restaurant Selenium')
    I.wait(2);
    I.click('Najpopularniejsze dania')

    //1st item selection
    I.click({xpath: '//*[@id="page"]/div/section/div[1]/section/section[1]/div[2]/div/div/div/div[1]/div/div/div/div/div/div[1]/h3'})
    I.wait(2)
    I.click("#card-panel_1 > div > div > div._3vmLu > button");
    I.wait(3)

    //2nd item selection
    I.click({xpath: '//*[@id="page"]/div/section/div[1]/section/section[5]/div[2]/div[1]/div/div/div[1]/div/div/div/div/div'})
    I.wait(2)
    I.click("#card-panel_12 > div > div > div._3vmLu > button")
    I.wait(3)

    //3rd item selection
    I.click({xpath: '//*[@id="page"]/div/section/div[1]/section/section[5]/div[2]/div[2]/div/div/div[1]/div/div/div/div/div'})
    I.wait(2)
    I.click("#card-panel_13 > div > div > div._3vmLu > button");
    I.wait(3)
        
  
        // const checkoutButtonText = await I.grabTextFrom({xpath: '//*[@id="page"]/div/aside/div/div/div[3]/button/span/text()[1]'});
        // console.log(checkoutButtonText);

    });

Scenario('5.Verify adding a note to an item', ({ I }) => {

    I.amOnPage('/');
    I.fillField({ xpath: '//*[@id="imysearchstring"]' }, 'Dłusko 12, 78-630 Dłusko');
    I.click({ xpath: '//*[@id="iautoCompleteDropDownContent"]/a' });
    I.waitForText('TEST Restaurant Selenium',10)
    I.click('TEST Restaurant Selenium')
    I.wait(2);
    I.click('Najpopularniejsze dania')

    //Item selection
    I.click({xpath: '//*[@id="page"]/div/section/div[1]/section/section[1]/div[2]/div/div/div/div[1]/div/div/div/div/div/div[1]/h3'})
    I.wait(2)
    I.click("#card-panel_1 > div > div > div._3vmLu > button");
    I.wait(3)

    //Adding a note
    I.click("#list > div > div > div:nth-child(2) > div._3aHYM > div > span > strong")
    I.fillField({xpath: '//*[@id="textarea_0"]'}, 'This is test')
    I.click("#list > div > div > div:nth-child(2) > div.S4td4 > div.S4td4 > div > div:nth-child(2) > div > span")
    I.see('This is test')
  
});


Scenario('6.Verify order flow-checkout', ({ I }) => {

    //Navigating to the menu page
    I.amOnPage('/');
    I.fillField({ xpath: '//*[@id="imysearchstring"]' }, 'Dłusko 12, 78-630 Dłusko');
    I.click({ xpath: '//*[@id="iautoCompleteDropDownContent"]/a' });
    I.waitForText('TEST Restaurant Selenium',10)
    I.click('TEST Restaurant Selenium')
    I.wait(2);
    I.click('Najpopularniejsze dania')

    //Selecting 3 different meals
    //1st item selection
    I.click({xpath: '//*[@id="page"]/div/section/div[1]/section/section[1]/div[2]/div/div/div/div[1]/div/div/div/div/div/div[1]/h3'})
    I.wait(2)
    I.click("#card-panel_1 > div > div > div._3vmLu > button");
    I.wait(3)

    //2nd item selection
    I.click({xpath: '//*[@id="page"]/div/section/div[1]/section/section[5]/div[2]/div[1]/div/div/div[1]/div/div/div/div/div'})
    I.wait(2)
    I.click("#card-panel_12 > div > div > div._3vmLu > button")
    I.wait(3)

    //3rd item selection
    I.click({xpath: '//*[@id="page"]/div/section/div[1]/section/section[5]/div[2]/div[2]/div/div/div[1]/div/div/div/div/div'})
    I.wait(2)
    I.click("#card-panel_13 > div > div > div._3vmLu > button");
    I.wait(3)

    //Adding a comment
    I.click("#list > div > div > div:nth-child(2) > div._3aHYM > div > span > strong")
    I.fillField({xpath: '//*[@id="textarea_0"]'}, 'no sugar')
    I.click("#list > div > div > div:nth-child(2) > div.S4td4 > div.S4td4 > div > div:nth-child(2) > div > span")
    I.see('no sugar')

    //Placing the order with paypal
    I.click({xpath: '//*[@id="page"]/div/aside/div/div/div[3]/button'})
    I.wait(2)
    I.click({xpath: '//*[@id="page"]/div/section/div[1]/div/div/div/section/div[5]/div/div[2]/div/div[1]'})
    I.click('PayPal')
    I.click('Zrobione')
    I.wait(2)

    //Cancelling paypal and selecting cash payment
    I.click({xpath: '//*[@id="page"]/div/section/div[1]/div/div/div/section/div[5]/div/div[2]/div/div[1]'})
    I.click('Gotówka')
    I.click('Zrobione')
    I.wait(2)


    //Adding personal details
    I.fillField({xpath: '//*[@id="input_4"]'}, 'TestUser0055')
    I.fillField({xpath: '//*[@id="input_5"]'}, 'Test_User0055@test.com')
    I.fillField({xpath: '//*[@id="input_6"]'}, '+49112542672')

    //Completing the order
    I.click({xpath: '//*[@id="page"]/div/section/div[1]/div/div/div/section/div[8]/button'})
    I.wait(2)
    I.see('Dziękujemy za złożenie zamówienia!')

});
