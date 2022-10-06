// news
const cardsNews = document.querySelector(".newsbox");

const newsToCreate = [
  {
    name: "Léo",
    picture: "https://placekitten.com/200/90"
  },
  {
    name: "Milo",
    picture: "https://placekitten.com/200/194"
  },
  {
    name: "Charly",
    picture: "https://placekitten.com/200/179"
  }
];

  function createCardNews(title, imageUrl) {
    const cardNew = document.createElement("div");
    cardNew.classList.add("card-news");
    cardsNews.appendChild(cardNew);
  
    const cardHeaderNews = document.createElement("div");
    cardHeaderNews.classList.add("card-header-news");
    cardNew.appendChild(cardHeaderNews);
  
    const cardImgNews = document.createElement("div");
    cardImgNews.style.backgroundImage = `url(${imageUrl})`;
    cardImgNews.classList.add("card-img-news");
    cardHeaderNews.appendChild(cardImgNews);

    const cardBodyNews = document.createElement("div");
    cardBodyNews.classList.add("card-body-news");
    cardNew.appendChild(cardBodyNews);

    const cardTitleNews = document.createElement("h2");
    cardTitleNews.classList.add("card-title-news");
    cardTitleNews.innerHTML = title;
    cardBodyNews.appendChild(cardTitleNews);

    const cardButtonNews = document.createElement("button");
    cardButtonNews.classList.add("card-button");
    cardButtonNews.innerHTML = "Now";
    cardBodyNews.appendChild(cardButtonNews);

  };

  for (let i = 0; i < newsToCreate.length; i++) {
    createCardNews(newsToCreate[i].name, newsToCreate[i].picture);
  };