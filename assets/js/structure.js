const header = document.querySelector(".header");
const main = document.querySelector(".main");

const sectionArray = [
  {
    title: "News",
    image: "assets/img/bgLaputa.jpg",
    htmlSpan: "",
    htmlP: "",
    htmlcontent: "<div class='newsbox'></div>"
  },
  {
    title: "Biographie",
    image: "assets/img/bgTotoro.jpeg",
    htmlSpan: "<img class='float' src='assets/img/Joe_Hisaishi_2011.png' alt='photo de Joe Hisaishi'/><h2>Joe Hisaishi, de son vrai nom Mamoru Fujisawa, est un compositeur, chef d'orchestre, pianiste et parolier japonais né le 6 décembre 1950 à Nagano. Son nom de scène a été choisi en hommage au trompettiste de jazz et compositeur Quincy Jones. En effet, Quincy se prononce en japonais « Kou-inshi », et le kanji utilisé pour écrire « Hisa » dans « Hisaishi » peut également se prononcer « Kou ». « Joe Hisaishi » pourrait ainsi être transcrit « Joe Quincy ». C'est sur son univers décalé et atypique, combinant arrangements expérimentaux et orchestrations symphoniques, que Joe Hisaishi fonde son succès.<br><br> Passionné de piano et influencé dès son plus jeune âge par Erik Satie ou le minimalisme de Philip Glass, il fait ses armes dans le monde professionnel en réalisant les bandes-son de dessins animés tels que 'L'Académie des ninjas' et 'Plein gaz', qui s'exportent dans le monde entier. S'il se consacre parallèlement aux enregistrements de ses premiers albums, remarqués pour leurs inspirations électroniques et new age, comme 'Information' (1982), ce n'est qu'en 1984 que Joe Hisaishi acquiert une notoriété internationale. Après sa rencontre déterminante avec le réalisateur Miyazaki, il devient son compositeur attitré et travaille dès lors sur la quasi-totalité de ses films d'animation, de 'Nausicaa de la vallée du vent' (1984) au 'Voyage de Chihiro' en 2001, en passant par 'Princesse Mononoké' (1997).<br><br> Son style caractérisé par l'épuration mélodique, assortie d'une grande richesse instrumentale, lui permet de collaborer avec Kitano ou encore Olivier Dahan ('Le Petit Poucet', 2001). Grâce à son ouvre alliant tradition et modernité, Joe Hisaishi est aujourd'hui considéré comme l'un des musiciens les plus originaux de l'archipel nippon.</h2>",
    htmlP: "",
    htmlcontent: "<h2>Div test content</h2>"
  },
  {
    title: "Discographie",
    image: "assets/img/bgPorco.jpg",
    htmlSpan: "",
    htmlP: "",
    htmlcontent: "<div class ='modal-container'><div class='overlay modal-trigger'></div><div class='modal' id='modalId' role='dialog' aria-labelledby='modalTitle' aria-describedby='dialogDesc'><button aria-label='close modal'class='close-modal modal-trigger'>X</button><h1 id='modalTitle'>Partition</h1></div></div><div class ='disco'></div>"
  },
  {
    title: "Rewards",
    image: "assets/img/bgMononoke.jpg",
    htmlSpan: "",
    htmlP: "",
    htmlcontent: "<div class='rewards'></div>"
  },
  {
    title: "Pictures",
    image: "assets/img/bgPorco.jpg",
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
mobileSource.src = "assets/video/joevideo3.mp4";
videoMobile.appendChild(mobileSource);

const videoDesktop = document.createElement("video");
videoDesktop.classList.add("video-desktop");
videoDesktop.autoplay = true;
videoDesktop.loop = true;
videoDesktop.muted = true;
header.appendChild(videoDesktop);
const desktopSource = document.createElement('source');
desktopSource.type = "video/mp4";
desktopSource.src = "assets/video/joevideo2.mp4";
videoDesktop.appendChild(desktopSource);

const divParent = document.createElement("div");
divParent.classList.add("header-wrapper");
header.appendChild(divParent);

const headerTitle = document.createElement("h1");
headerTitle.innerHTML = `<img src ="assets/img/logoJH.png" alt="logo joe Hisaishi"/>`;
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
