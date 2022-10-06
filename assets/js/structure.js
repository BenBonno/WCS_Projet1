const header = document.querySelector(".header");
const main = document.querySelector(".main");

const sectionArray = [
  {
    title: "News",
    image: "/assets/img/bgLaputa.jpg",
    htmlSpan: "",
    htmlP: "",
    htmlcontent: "<div class='newsbox'></div>"
  },
  {
    title: "Biographie",
    image: "/assets/img/bgTotoro.jpeg",
    htmlSpan: "<img src='/assets/img/Joe_Hisaishi_2011.png' width='170vw' alt='Joe Coker'/>",
    htmlP: "",
    htmlcontent: "<h2>Div test content</h2>"
  },
  {
    title: "Discographie",
    image: "/assets/img/bgPorco.jpg",
    htmlSpan: "",
    htmlP: "",
    htmlcontent: "<div>PARATITION</div>"
  },
  {
    title: "Rewards",
    image: "/assets/img/bgMononoke.jpg",
    htmlSpan: "",
    htmlP: "",
    htmlcontent: "<div class='rewards'></div>"
  },
  {
    title: "Carrousel",
    image: "/assets/img/bgPorco.jpg",
    htmlSpan: "",
    htmlP: "",
    htmlcontent: '<div id="carrousel"> <div id="containerCarrousel"></div> <img src="assets/img/leftChevron.png" alt="leftButtonCarrousel" class="button" id="leftChevron"/> <img src="assets/img/rightChevron.png" alt="rightButtonCarrousel" class="button" id="rightChevron"/></div>',
  }
];

/// Creation Header ///

const videoMobile = document.createElement("video");
videoMobile.classList.add("video-mobilefirst");
videoMobile.autoplay = true;
videoMobile.loop = true;
videoMobile.muted = true;
header.appendChild(videoMobile);
const mobileSource = document.createElement('source');
mobileSource.type = "video/mp4";
mobileSource.src = "/assets/video/joevideo3.mp4";
videoMobile.appendChild(mobileSource);

const videoDesktop = document.createElement("video");
videoDesktop.classList.add("video-desktop");
videoDesktop.autoplay = true;
videoDesktop.loop = true;
videoDesktop.muted = true;
header.appendChild(videoDesktop);
const desktopSource = document.createElement('source');
desktopSource.type = "video/mp4";
desktopSource.src = "/assets/video/joevideo2.mp4";
videoDesktop.appendChild(desktopSource);

const divParent = document.createElement("div");
divParent.classList.add("header-wrapper");
header.appendChild(divParent);

const headerTitle = document.createElement("h1");
headerTitle.innerHTML = `<img src ="/assets/img/logoJH.png" alt="logo joe Hisaishi"/>`;
headerTitle.classList.add("header-title");
divParent.appendChild(headerTitle);

const headerNav = document.createElement("nav");
headerNav.classList.add("header-nav");
divParent.appendChild(headerNav);

const divAccueil = document.createElement("div");
divAccueil.classList.add("accueil");
header.appendChild(divAccueil);
///// Fin HEADER /////

function createSection(title, imageUrl, htmlSpan, htmlP, htmlcontent) {
  const section = document.createElement("section");
  section.id = `${title}`;
  section.classList.add("section");
  main.appendChild(section);

  const sectionFigure = document.createElement("figure");
  sectionFigure.classList.add("image-container");
  section.appendChild(sectionFigure);

  const figureImg = document.createElement("img");
  figureImg.src = `${imageUrl}`;
  figureImg.alt = `Description`;
  sectionFigure.appendChild(figureImg);

  const articleBody = document.createElement("article");
  articleBody.classList.add("content");
  section.appendChild(articleBody);

  const articleTitle = document.createElement("h2");
  articleTitle.innerHTML = `${title}`;
  articleTitle.classList.add("section-title");
  articleBody.appendChild(articleTitle);

  if (htmlSpan !== "" || htmlP !== "") {
    const articleSpan = document.createElement("span");
    articleSpan.innerHTML = `${htmlSpan}`;
    articleSpan.classList.add("byline");
    articleBody.appendChild(articleSpan);

    const articleP = document.createElement("p");
    articleP.innerHTML = `${htmlP}`;
    articleBody.appendChild(articleP);
  } else {
    const articlediv = document.createElement("div");
    articlediv.innerHTML = `${htmlcontent}`;
    articlediv.classList.add("freestyle");
    articleBody.appendChild(articlediv);
  }
}

for (let i = 0; i < sectionArray.length; i++) {
  createSection(sectionArray[i].title, sectionArray[i].image, sectionArray[i].htmlSpan, sectionArray[i].htmlP, sectionArray[i].htmlcontent);
}



// GHISLAIN LE BOSS !!!!!! bisous !//