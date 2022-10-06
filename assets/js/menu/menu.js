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


const navUlPort = document.createElement("ul");
navUlPort.classList.add("nav-ul-port");
menuPort.appendChild(navUlPort);

for (let i = 0; i < sectionArray.length; i++) {
  const navLiPort = document.createElement("li");
  navLiPort.classList.add("nav-li-port");
  navUlPort.appendChild(navLiPort);

  const navAPort = document.createElement("a");
  navAPort.innerHTML = `${sectionArray[i].title}`;
  navAPort.href = `#${sectionArray[i].title}`;
  navAPort.classList.add("nav-a-port");
  navUlPort.appendChild(navAPort);
}

