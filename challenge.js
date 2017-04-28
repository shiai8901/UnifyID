/**
 * Note: Read README first.
 */
var selector = {
  "yahoo": {
    "username": "input[name='username']",
    "password": "input[type='password']",
    "loginbutton": "#login-signin"
  },
  "facebook": {
    "username": "#email",
    "password": "#pass",
    "loginbutton": "#loginbutton"
  },
  "instagram": {
    "username": "input[name='username']",
    "password": "input[type='password']",
    "loginbutton": "._ah57t._84y62._i46jh._rmr7s"
  },
  "citi": {
    "username": "#usernameMasked",
    "password": "input[type='password']",
    "loginbutton": "#signInBtn"
  },
  "bankofamerica": {
    "username": "#onlineId1",
    "password": "input[type='password']",
    "loginbutton": "#hp-sign-in-btn"
  },
  "paypal": {
    "username": "#email",
    "password": "#password",
    "loginbutton": "#btnLogin"
  }
}

var emailSelector = "#email";
var passwordSelector = "input[type='password']";
var loginbtnSelector = "#login";
for (var cite in selector) {
    if (window.location.hostname.includes(cite)) {
        emailSelector = selector[cite]["username"];
        passwordSelector = selector[cite]["password"];
        loginbtnSelector = selector[cite]["loginbutton"];
        break;
    }
}
/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */
function getUsernameField() {
  return $(emailSelector);
}

function getPasswordField() {
  return $(passwordSelector);
}

function getFormField() {
  return getUsernameField().closest('form');
}

function getSubmitButton() {
  return $(loginbtnSelector);
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  let usernameField = getUsernameField();
  let passwordField = getPasswordField();

  usernameField.val(username);
  passwordField.val(password);

  setTimeout(() => {
  	getSubmitButton().click();
  }, 1000);

};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField()
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    username: getUsernameField().val(),
    password: getPasswordField().val()
  };

};
