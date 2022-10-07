// news
const cardsNews = document.querySelector(".newsbox");

const newsToCreate = [
  {
    name: "Hisaishi en streaming",
    paragraphe: "Le compositeur et ses créations disponibles en streaming. <br><br> 3 Octobre 2022",
    picture: "assets/img/news1.jpg",
    link : "https://www.japantimes.co.jp/culture/2020/05/28/music/ghibli-joe-hisaishi-streaming/"
  },
  {
    name: "My Neighbour Totoro",
    paragraphe: "La représentation de Totoro à voir au 'Barbican Theatre'. <br><br> 20 Septembre 2022",
    picture: "assets/img/news2.jpg",
    link: "https://www.barbican.org.uk/whats-on/2022/event/royal-shakespeare-company-my-neighbour-totoro"
  },
  {
    name: "Performance hors norme",
    paragraphe: "Découvrez la préstation de Mr Hisaishi au Far East Film Festival (Italie) <br><br> 12 Décembre 2021",
    picture: "assets/img/news3.jpg",
    link: "https://www.japantimes.co.jp/culture/2015/03/18/films/asian-cinema-caught-festival-feeding-frenzy/"
  }
];

  function createCardNews(title, para, imageUrl, link) {
    const cardNew = document.createElement("div");
    cardNew.classList.add("card-news");
    cardsNews.appendChild(cardNew);
  
    const cardHeaderNews = document.createElement("div");
    cardHeaderNews.classList.add("card-header-news");
    cardNew.appendChild(cardHeaderNews);
  
    const cardImgNews = document.createElement("div");
    cardImgNews.style.backgroundImage = `url(${imageUrl})`;
    cardImgNews.classList.add("card-img-news");
    cardImgNews.addEventListener("click", function(){
      window.open(link,'_blank') });
    cardHeaderNews.appendChild(cardImgNews);

    const cardBodyNews = document.createElement("div");
    cardBodyNews.classList.add("card-body-news");
    cardBodyNews.addEventListener("click", function(){
      window.open(link,'_blank') });
    cardNew.appendChild(cardBodyNews);

    const cardTitleNews = document.createElement("h2");
    cardTitleNews.classList.add("card-title-news");
    cardTitleNews.innerHTML = title;
    cardBodyNews.appendChild(cardTitleNews);

    const cardPNews = document.createElement("p");
    cardPNews.classList.add("card-title-news");
    cardPNews.innerHTML = para;
    cardBodyNews.appendChild(cardPNews);

    const cardButtonNews = document.createElement("button");
    cardButtonNews.classList.add("card-button");
    cardButtonNews.addEventListener("click", function(){
      window.open(link,'_blank') });
    cardButtonNews.innerHTML = "Lire l'article";
    cardBodyNews.appendChild(cardButtonNews);

  };

  for (let i = 0; i < newsToCreate.length; i++) {
    createCardNews(newsToCreate[i].name, newsToCreate[i].paragraphe, newsToCreate[i].picture, newsToCreate[i].link);
  };
