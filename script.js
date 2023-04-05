const container = document.querySelector("main")
const formLogin = document.querySelector("#form-login")
const loginLink = document.querySelector("#login-link")
const loginEmail = document.querySelector("#login-email")
const loginEmailField = document.querySelector("#login-email-field")
const loginPsw = document.querySelector("#login-psw")
const loginPswField = document.querySelector("#login-psw-field")
const loginEyeIcon = document.querySelector("#login-eye-icon")
const formRegister = document.querySelector("#form-register")
const registerLink = document.querySelector("#register-link")
const registerName = document.querySelector("#register-name")
const registerNameField = document.querySelector("#register-name-field")
const registerEmail = document.querySelector("#register-email")
const registerEmailField = document.querySelector("#register-email-field")
const registerPsw = document.querySelector("#register-psw")
const registerPswField = document.querySelector("#register-psw-field")
const registerEyeIcon = document.querySelector("#register-eye-icon")
const cRegisterPsw = document.querySelector("#c-register-psw")
const cRegisterPswField = document.querySelector("#c-register-psw-field")
const cRegisterEyeIcon = document.querySelector("#c-register-eye-icon")
/*Change Form*/
registerLink.onclick = () => {
  container.classList.add("active")
}
loginLink.onclick = () => {
  container.classList.remove("active")
}
/*Hide and Show Password */
loginEyeIcon.onclick = () => {
  if (loginPsw.type == "password") {
    loginPsw.type = "text"
    loginEyeIcon.src = "/img/eye-open.svg"
  } else {
    loginPsw.type = "password"
    loginEyeIcon.src = "/img/eye-close.svg"
  }
}
registerEyeIcon.onclick = () => {
  if (registerPsw.type == "password") {
    registerPsw.type = "text"
    registerEyeIcon.src = "/img/eye-open.svg"
  } else {
    registerPsw.type = "password"
    registerEyeIcon.src = "/img/eye-close.svg"
  }
}
cRegisterEyeIcon.onclick = () => {
  if (cRegisterPsw.type == "password") {
    cRegisterPsw.type = "text"
    cRegisterEyeIcon.src = "/img/eye-open.svg"
  } else {
    cRegisterPsw.type = "password"
    cRegisterEyeIcon.src = "/img/eye-close.svg"
  }
}
/*Form Login E-mail Validation*/
function checkLoginEmail() {
  if (loginEmail.value === "") {
    return loginEmailField.classList.add("invalid")
  }
  loginEmailField.classList.remove("invalid")
}
/*Form Login Password Validation*/
function checkLoginPsw() {
  if (loginPsw.value === "") {
    return loginPswField.classList.add("invalid")
  }
  loginPswField.classList.remove("invalid")
}
/*Form Login Validation*/
formLogin.addEventListener("submit", (e) => {
  e.preventDefault()
  checkLoginEmail()
  checkLoginPsw()
  loginEmail.addEventListener("keyup", checkLoginEmail)
  loginPsw.addEventListener("keyup", checkLoginPsw)
})
/*Form Register Name Validation*/
function checkRegisterName() {
  const namePattern = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/
  if (!registerName.value.match(namePattern)) {
    return registerNameField.classList.add("invalid")
  }
  registerNameField.classList.remove("invalid")
}
/*Form Register E-mail Validation*/
function checkRegisterEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  if (!registerEmail.value.match(emailPattern)) {
    return registerEmailField.classList.add("invalid")
  }
  registerEmailField.classList.remove("invalid")
}
/*Form Register Password Validation*/
function checkRegisterPsw() {
  const pswPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/
  if (!registerPsw.value.match(pswPattern)) {
    return registerPswField.classList.add("invalid")
  }
  registerPswField.classList.remove("invalid")
}
/*Form Register Confirm Password*/
function confirmRegisterPsw() {
  if (registerPsw.value !== cRegisterPsw.value || cRegisterPsw.value === "") {
    return cRegisterPswField.classList.add("invalid")
  }
  cRegisterPswField.classList.remove("invalid")
}
/*Form Register Validation*/
formRegister.addEventListener("submit", (e) => {
  e.preventDefault()
  checkRegisterName()
  checkRegisterEmail()
  checkRegisterPsw()
  confirmRegisterPsw()
  registerName.addEventListener("keyup", checkRegisterName)
  registerEmail.addEventListener("keyup", checkRegisterEmail)
  registerPsw.addEventListener("keyup", checkRegisterPsw)
  cRegisterPsw.addEventListener("keyup", confirmRegisterPsw)
})