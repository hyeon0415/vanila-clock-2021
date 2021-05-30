const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting"),
SHOWING_CN = "showing";
const delBtn = document.querySelector(".delBtn");

delBtn.addEventListener("click" , delete_Name);

function delete_Name(){
localStorage.removeItem(USER_LS);
greeting.classList.remove(SHOWING_CN);
loadName();
input.value = "";

}

const USER_LS = "currentUser";

function saveName(text){
localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
event.preventDefault();
const currentValue = input.value;
paintName(currentValue);
saveName(currentValue);

}

function askName(){
form.classList.add(SHOWING_CN)
form.addEventListener("submit" , handleSubmit)


}

function paintName(text){
form.classList.remove(SHOWING_CN)
greeting.classList.add(SHOWING_CN)
greeting.innerText = `안녕하세요 ${text}님`
}

function loadName(){
const currentUser = localStorage.getItem(USER_LS)
if(currentUser === null){
askName();

} else{
paintName(currentUser);
}
}

function init(){
loadName();
}

init();