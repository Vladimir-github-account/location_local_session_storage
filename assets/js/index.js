'use strict';
const locationParamsList = document.getElementById("locationParamsList");
const reloadButton = document.getElementById("reloadButton");
const contactsButton = document.getElementById("contactsButton");


window.onload = function () {
    const locationHost = 'host: ' + location.host;
    const locationPathname = 'pathname: ' +location.pathname;
    const locationPort = 'port: ' +location.port;
    const locationHostname = 'hostname: ' +location.hostname;
    const locationSearch = 'search: ' +location.search;
    const locationProtocol = 'protocol: ' +location.protocol;
    locationParamsList.appendChild(createLocationParamsListItem(locationHost));
    locationParamsList.appendChild(createLocationParamsListItem(locationPathname));
    locationParamsList.appendChild(createLocationParamsListItem(locationPort));
    locationParamsList.appendChild(createLocationParamsListItem(locationHostname));
    locationParamsList.appendChild(createLocationParamsListItem(locationSearch));
    locationParamsList.appendChild(createLocationParamsListItem(locationProtocol));
};

function createLocationParamsListItem(param) {
    const li = document.createElement("li");
    li.innerText = param;
    return li;
}

reloadButton.onclick = function () {
    location.reload();
};

window.onmousemove = function () {
    sessionStorage.setItem('index','1');
    location.reload();
};


contactsButton.onclick = function () {
    const url = `${location.origin}/pages/contacts.html`;
    location.replace(url);
};

/*const createUserButton = document.getElementById("loginButton");
const userNameInput = document.querySelector("input[name='name']");
const userSurnameInput = document.querySelector("input[name='surname']");
const userEmailInput = document.querySelector("input[name='email']");


createUserButton.onclick = createUser;



function createUser(e) {
    const user = {
        name: userNameInput.value,
        surname: userSurnameInput.value,
        email: userEmailInput.value,
    };
    sessionStorage.setItem('createDate', new Date().toLocaleString());
    localStorage.setItem('userData', JSON.stringify(user));
}

onload = logUser;

function logUser() {
    if (sessionStorage.getItem('createDate')) {
        alert(`Were created ${sessionStorage.getItem('createDate')}`);
    }
    console.log(localStorage.getItem("userData"));
}*/


/*
const accessToken = "skdfjskldf";

const authorizedUser = {
    fullName:"Name Surname",
    email: "test@gmail.com",
};

const loadUser = new Promise(function (resolve, reject) {
    try {
        const user = JSON.parse(localStorage.getItem("authorizeData"));
        if (user){
            resolve(user);
        } else reject( new Error("user is not authorized"));
    }catch (e) {
        console.error(e);
    }
});

window.onload = logUserPromise;

async function logUser() {
    try {
        const user = JSON.parse(localStorage.getItem("authorizeData"));
        if (user){
            console.log(user);
        }
    } catch (e) {
        throw new Error("user is not authorized");
    }
}

function logUserPromise() {
    loadUser.then(console.log).catch(console.error);
}

window.onclick = saveUser;

async function saveUser() {
    window.localStorage.setItem("authorizeData", JSON.stringify(authorizedUser));
}*/
