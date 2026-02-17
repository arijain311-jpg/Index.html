const ADMIN_PASSWORD = "tathastu1234"; // change this

function openLogin() {
  document.getElementById("adminPanel").style.display = "block";
}

function login() {
  const pass = document.getElementById("password").value;
  if (pass === ADMIN_PASSWORD) {
    alert("Admin access granted");
  } else {
    alert("Wrong password");
  }
}

function enableEdit() {
  document.querySelectorAll("[contenteditable]").forEach(el => {
    el.contentEditable = "true";
    el.style.border = "1px dashed olive";
  });
}

function saveData() {
  document.querySelectorAll("[contenteditable]").forEach(el => {
    localStorage.setItem(el.id, el.innerHTML);
    el.contentEditable = "false";
    el.style.border = "none";
  });
  alert("Changes saved on this device");
}

function logout() {
  document.getElementById("adminPanel").style.display = "none";
}

window.onload = function () {
  document.querySelectorAll("[contenteditable]").forEach(el => {
    const saved = localStorage.getItem(el.id);
    if (saved) el.innerHTML = saved;
  });
};
