# Ido-Bar-03-04-2022

(describe) "user-story" [test] => intended behavior

Test Animations

(Check if logo animation is working) "visits the site and see the logo animation is working" [visit the site, check if the logo animation is working] => logo animation should be running
(check if the logo animation is working when not in view) "visits the site and scrolls down" [visit the site, scroll down, check if the animation is still working] => logo animation should still be running
(check if portfolio background animation is off by default) "visits the site and dosent scroll down" [visit the site, check if the portfolio background animation is working] => protfolio background animation should not be working
(check if portfolio background animation is working when in view) "visits the site, scrolls down to the portfolio" [visit the site, scroll down to the portfolio and check if the background animation is working] => portfolio background animation should be working
(check if portfolio background animation stops working when it gets out of view) "visits the site, scrolls down to portfolio, then scrolls back up" [visit the site,scroll down to activate the animation, then scroll up and check if its working throughout the whole test] => portfolio background animation should be working when visible and not working when hidden

Test buttons

(check if dynamic whatsapp button is functional) "visits the site, and clicks the dynamic whatsapp button" [visit the site, click the dynamic whatsapp button] => should be redirected to a page that says "success"
(check if social bar whatsapp button is functional) "visits the site, scrolls down, clicks whatsapp button" [visit the site, click the whatsapp button] => should be redirected to a page that says "success"
(check if social bar linkedin button is functional) "visits the site, scrolls down, clicks linkedin button" [visit the site, click the linkedin button] => should be redirected to linkedin
(check if social bar facebook button is functional) "visits the site, scrolls down, clicks the facebook button" [visit the site, click the facebook button] => should be redirected to facebook
(check if social bar abra button is functional) "visits the site, scrolls down, clicks the abra button" [visit the site, click the abra button] => should be redirected to abra

Test input

(check if footer's text fields are functional) "visits the site, types info in the footer's text fields" [visit the site, type info in the footer's text fields] => the relevent info should be written in each text field
(check if social media bar's text fields are functional) "visits the site, types info in the social media bar's text fields" [visit the site, type info in the footer's text field] => the relevent info should be written in each text field

Test scroll functions

(check if backToTop button is hidden when viewing the top of the page) "visits the site" [visit the site, check if backToTop button is hidden] => backToTop button should be hidden
(check if backToTop button is visible when not viewing the top of the page) "visits the site, scrolls down" [visit the site, scroll down, check if backToTop button is visible] => backToTop button should be visible
(check if clicking backToTop button sends the viewport to the top of the page) "visits the site, scrolls down, clicks the backToTop button" [visit the site, scroll down, click backToTop button, check backToTop button is hidden] => backToTop button should be hidden
(check if footer is visible when viewing the top of the page) "visits the site" [visit the site, check if footer is visible] => footer should be visible
(check if footer is hidden when viewing the bottom of the page) "visits the site, scrolls to bottom" [visit the site, scroll to bottom, check if footer is hidden] => footer should be hidden
(check if footer is visible when viewing the top of the page, then check if footer is hidden when viewing the bottom of the page, then check if footer reapears when viewing top again) "visits the site, scrolls down, clicks backToTop button" [visit the site, check if footer is visible, scroll down, check if footer is hidden, scroll up, check if footer is visible] => footer should be hidden when viewing the bottom and visible when not viewing bottom

Test switchPanel functions

(check if clicking right arrow changes the current active dot in the upper panel) "visits the site, scrolls to upper panel, clicks right arrow button" [visit the site, click right arrow button, check if current active dot has changed] => second dot should be active
(check if clicking left arrow changes the current active dot in the upper panel) "visits the site, scrolls to upper panel, clicks left arrow button" [visit the site, click left arrow button, check if current active dot has changed] => last dot should be active
(check if clicking an empty dot changes the current active dot in the upper panel) "visits the site, scrolls to upper panel, clicks on an empty dot" [visit the site, click an empty dot in the upper panel, check if current active dot has changed] => clicked dot should be active
(check if current active dot will move by it self) "visits the site, scrolls to lower panel" [visit the site, check which dot is active, wait, check if active dot has changed] => current active dot should be changed
(check if clicking an empty dot changed the current active dot in the lower panel) "visits the site, scrolls to lower panel, clicks on an empty dot" [visit the site, click an empty dot in the lower panel, check if current active dot has changed] => clicked dot should be active
