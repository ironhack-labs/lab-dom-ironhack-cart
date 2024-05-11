const myForm = document.getElementById("my-form");
let nameImput = document.querySelector("#name");
let nameImput = document.querySelector("#email");
const msg = document.querySelector(".msg");
let user = document.querySelector("#user");


myForm.addEventListener("submit", onSubmit);
function onSubmit(eventParam) {
  eventParam.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
 
    msg.innerText = "Hey, please enter all fields...";
    msg.classList.add("error");
    setTimeout(() => msg.remove(), 2000);
  }
 
  else {
    console.log("successfull");

   
    let li = document.createElement("li");

    li.appendChild(
      document.createTextNode(`${nameInput.value}:  ${emailInput.value}`)
    );

  
    userList.appendChild(li);

 
    nameInput.value = "";
    emailInput.value = "";
  }
}