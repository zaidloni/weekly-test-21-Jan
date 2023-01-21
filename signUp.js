let userData = [];

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPassEl = document.getElementById("confirm-password");
const paraEl = document.getElementById("para");
const signUpBtnEl = document.getElementById("signUp-Btn");

//Array containing all the user data in form of object

//sign up button
signUpBtnEl.addEventListener("click", validateUser);

//RegEx check object with the required expression
const check = {
  name: /[a-z]{2}/,
  password: /(?=.*[\w?@]){8,12}/,
  email: /([a-z]+)(@)([a-z]+)\.([a-z]{3,5})/,
};

function validate(value, regex) {
  return regex.test(value);
}
/*Function for the sign Up button which checks the length of name 
email id with regex & also both the password should match
*/
function validateUser(e) {
  e.preventDefault();
  let nameElVal = nameEl.value;
  let emailElVal = emailEl.value;
  let passwordElVal = passwordEl.value;
  let confirmPassElVal = confirmPassEl.value;

  let nameCheck = validate(nameElVal, check.name);
  let emailCheck = validate(emailElVal, check.email);
  let passwordCheck = validate(passwordElVal, check.password);
  let confirmPassCheck = passwordElVal === confirmPassElVal;

  if (!nameCheck) {
    paraEl.innerText += "name check failed\n";
    paraEl.classList.add("red");
  }

  if (!emailCheck) {
    paraEl.innerText += "email check failed\n";
    paraEl.classList.add("red");
  }
  if (!passwordCheck) {
    paraEl.innerText += "password check failed\n";
    paraEl.classList.add("red");
  }
  if (!confirmPassCheck) {
    paraEl.innerText += "password mismatched \n";
    paraEl.classList.add("red");
  }

  let emailInObj = true;
  userData.forEach((e) => {
    if (e.email == emailElVal) {
      emailInObj = false;
    }
  });

  if (
    nameCheck &&
    emailCheck &&
    passwordCheck &&
    emailInObj &&
    confirmPassCheck
  ) {
    let user = {
      id: userData.length + 1,
      name: nameElVal,
      email: emailElVal,
      password: passwordElVal,
    };

    userData.push(user);
    console.log(userData);

    window.location.href = "signIn.html";
  }
}
// export { userData };
