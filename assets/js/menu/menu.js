const menu = document.querySelector(".menu");

const menuPort = document.createElement("div");
menuPort.classList.add("menu-icon");
menu.appendChild(menuPort);

const menuInput = document.createElement("input");
menuInput.type = "checkbox";
menuInput.classList.add("menu-icon__cheeckbox");
menuPort.appendChild(menuInput);

const menuDiv = document.createElement("div");
menuPort.appendChild(menuDiv);

const menuSpan1 = document.createElement("span");
menuDiv.appendChild(menuSpan1);

const menuSpan2 = document.createElement("span");
menuDiv.appendChild(menuSpan2);