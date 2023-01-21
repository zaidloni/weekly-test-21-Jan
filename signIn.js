const signInEmailEl = document.getElementById("Email");
const signInPassEl = document.getElementById("Password");
const signInParaEl = document.getElementById("Para");
const signInBtnEl = document.getElementById("signIn-Btn");

signInBtnEl.addEventListener("click", checkUser);

//function for the sign in page
function checkUser(e) {
  e.preventDefault();
  let signInEmailElVal = signInEmailEl.value;
  let signInPassElVal = signInPassEl.value;

  window.location.href = "chatGPT.html";

  //   userData.forEach((e) => {
  //     if (e.email === signInEmailElVal && e.password === signInPassElVal) {
  //       paraEl.innerText = "Login Success";
  //     }
  //   });
}
