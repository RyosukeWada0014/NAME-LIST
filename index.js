const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

const addList = (user) => {
  const list = document.createElement("li");
  list.innerText = user["name"];
  lists.appendChild(list);
};

const addListName = async () => {
  const users = await getUsers();
  users.map(addList);
};

button.addEventListener("click", addListName);

addEventListener("load", addListName);
