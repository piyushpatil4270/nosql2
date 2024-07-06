let ul = document.getElementById("ullist");
async function getUsers() { 
  try {
   
    let data = [];
    const res = await axios.get("http://localhost:3000/user/getUsers");
    data = res.data;
    console.log("This is data ", data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].username, data[i].email, data[i].phone);
      createUser(data[i].id, data[i].username, data[i].email, data[i].phone);
    }
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", getUsers);

document
  .getElementById("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    console.log(username.value, email.value, phone.value);

    axios
      .post("http://localhost:3000/user/addUser", {
        username: username.value,
        email: email.value,
        phone: phone.value,
      })
      .then((data) => createUser(data.data.id,data.data.username,data.data.email,data.data.phone))
      .catch((err) => console.log(err));

    username.value = "";
    email.value = "";
    phone.value = "";
  });

function createUser(id, username, email, phone) {

  let li = document.createElement("li");
  li.classList.add("user-info");

  const usernameSpan = document.createElement("span");
  usernameSpan.textContent = username;

  const emailSpan = document.createElement("span");
  emailSpan.textContent = email;

  const phoneSpan = document.createElement("span");
  phoneSpan.textContent = phone;

  li.appendChild(usernameSpan);
  li.appendChild(emailSpan);
  li.appendChild(phoneSpan);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  editBtn.className = "btn-class";
  li.appendChild(editBtn);
  editBtn.addEventListener("click",function(event){
    document.getElementById("username").value=username
    document.getElementById("email").value=email
    document.getElementById("phone").value=phone
    axios.post("http://localhost:3000/user/delUser",{id:id})
    .then((res)=>{
        console.log("deleted the user")
        ul.removeChild(li)

    })
    .catch((err)=>console.log("Error :",err))
  })

  const delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("Delete"));
  delBtn.className = "btn-class";
  delBtn.addEventListener("click", function (event) {
    axios.post("http://localhost:3000/user/delUser",{id:id})
    .then((res)=>{
        console.log("deleted the user")
        ul.removeChild(li)

    })
    .catch((err)=>console.log("Error :",err))
  });
 // delBtn.addEventListener("click", function (event) {});
  li.appendChild(delBtn);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  li.className = "list-el";
  ul.appendChild(li);
}
