//// Div du Menu Portable
//// Image totoro en bas
// const MenuBgWrapper = document.createElement("div");
// MenuBgWrapper.classList.add("wrapper-menu");
// headerNav.appendChild(MenuBgWrapper);

const totoImg = document.createElement("img");
totoImg.src = `/assets/img/totorosmall.gif`;
headerNav.appendChild(totoImg);

const menuPort = document.createElement("div");
menuPort.classList.add("menu-icon");
headerNav.appendChild(menuPort);

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

/// Navigation
const navUl = document.createElement("ul");
navUl.classList.add("nav-ul");
menuPort.appendChild(navUl);

for (let i = 0; i < sectionArray.length; i++) {
  const navLi = document.createElement("li");
  navLi.classList.add("nav-li");
  navUl.appendChild(navLi);

  const navA = document.createElement("a");
  navA.innerHTML = `${sectionArray[i].title}`;
  navA.href = `#${sectionArray[i].title}`;
  navA.classList.add("nav-a");
  navLi.appendChild(navA);
}