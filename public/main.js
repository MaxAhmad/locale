document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnReg").addEventListener("click", doReg);
  document.getElementById("btnAllState").addEventListener("click", getAllState);
  document.getElementById("btnState").addEventListener("click", getState);
  document
    .getElementById("btnAllRegion")
    .addEventListener("click", getAllRegion);
  document.getElementById("btnRegion").addEventListener("click", getRegion);
  document.getElementById("btnAllLga").addEventListener("click", getAllLga);
  document.getElementById("btnLga").addEventListener("click", getLga);
});
let currentForm = null;

function change(str) {
  let strName = str.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  return strName[0].toUpperCase() + strName.slice(1);
}

function doReg(ev) {
  ev.preventDefault();
  currentForm = "regForm";
  let email = document.getElementById("email").value;
  let data = JSON.stringify({ email });
  send("api/register", data, "POST");
}
function getAllState(ev) {
  ev.preventDefault();
  currentForm = "stateForm";
  //get the list of cheeses
  send("api/v1/state", null, "GET");
}

function getState(ev) {
  ev.preventDefault();
  currentForm = "stateForm";
  let state = document.getElementById("state").value;
  send(`api/v1/state?state=${change(state)}`, null, "GET");
}

function getAllRegion(ev) {
  ev.preventDefault();
  currentForm = "regionForm";
  send("api/v1/region", null, "GET");
}

function getRegion(ev) {
  ev.preventDefault();
  currentForm = "regionForm";
  let region = document.getElementById("region").value;
  send(`api/v1/region?region=${change(region)}`, null, "GET");
}

function getAllLga(ev) {
  ev.preventDefault();
  currentForm = "lgaForm";
  send("api/v1/lga", null, "GET");
}

function getLga(ev) {
  ev.preventDefault();
  currentForm = "lgaForm";
  let lga = document.getElementById("lga").value;
  send(`api/v1/lga?lga=${change(lga)}`, null, "GET");
}

function send(endpoint, data, method) {
  let key = sessionStorage.getItem("mySiteAPIKey");
  let url;
  url = `http://localhost:5050/${endpoint}`;
  let h = new Headers();
  if (data) {
    h.append("Content-Type", "application/json");
  }
  h.append("x-api-key", key);
  let req = new Request(url, {
    method,
    headers: h,
    body: data,
  });
  fetch(req)
    .then((res) => res.json())
    .then(success)
    .catch(fail);
}
function fail(err) {
  //fetch call failed
  console.warn(err.message);
  let pre = document.querySelector(`#${currentForm} .response`);
  pre.textContent = err.message;
}
function success(content) {
  //fetch call got JSON
  if ("error" in content) {
    fail(content.error);
    return;
  }
  let data = content.data;
  let pre = document.querySelector(`#${currentForm} .response`);
  pre.textContent = JSON.stringify(data, "\n", 2);
  if (currentForm == "regForm") {
    sessionStorage.setItem("mySiteAPIKey", data.api_key);
  }
}
