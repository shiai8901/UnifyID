The challenge is to be able to do the following actions in a given website:
 * Trigger form submit with a pair of credentials.
 * Find the form elements in the dom.
 * Obtain the values from the login elements in the dom.

# Load The Extension

1. Go to 'chrome://extensions' in your chrome browser.
2. In the upper right corner check 'Developer mode'
3. In the menu that appeared select 'Load unpacked extension...'
4. Select this folder.

In order to reload your changes:
1. Go to 'chrome://extensions' in your chrome browser.
2. Click 'Update extensions now', 'Ctrl+r', or 'Cmd+r'.


# The Challenge

In this folder there is a file called challenge.js with three functions that you will need to override.
Currently challenge.js has sample code that shows a proof of concept for https://facebook.com

You can test the functions by clicking the UnifyID icon in the top right corner of Google Chrome and select the function
to test from the menu.

Here is what is expected when selecting each option from the menu:
 * Detect Fields: This will call your function `detectFormFields` and put a border around the elements.
 * Login: This will call your function `loginWithCredentials` with fake credentials.
 * Get Form Values: This will alert the result from your function `obtainFieldsValues`

You can change the credentials for testing the Log In in the file ./dist/credentials.json

# Optional

In case that you need to preserve a global state across several pages you can use the background script (background.js)
that is in this folder.
More about background scripts: https://developer.chrome.com/extensions/background_pages
More about communication with the background script: https://developer.chrome.com/extensions/nativeMessaging

# My Approach

Since almost every website has its own way to name the username field, password field and login button, so I decided to save all the selector strings inside an "selector" object, and use website hostname as attribute name in the "selector" object. Each website attribute is an object, with three attributes, including username, password and loginbutton, and the values for each attribute are the real selector strings. Therefore, it is easy to scale the selectors.

In order to find the right selector strings, I used a for loop to compared website hostname with the attribute names inside the "selector" object. If website hostname and attribute name are the same, the variables: emailSelector, passwordSelector and loginbtnSelector will be assigned with the selector strings. In case current website hostname does not match with any cite names in the "selector" object, I assigned default values for emailSelector, passwordSelector and loginbtnSelector variables.

The last change is replacing the generic selector strings with emailSelector, passwordSelector and loginbtnSelector variables inside getUsernameField(), getPasswordField() and getSubmitButton() functions.

My next step is to learn how to use background script, so I can save the "selector" object and the selector string finding method as a global state for later use.