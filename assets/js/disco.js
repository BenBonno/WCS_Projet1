// Disco js 
const discoArray = [
    {
    date: "1984",
    movie: "Nausicaä de la Vallée du Vent",
    song: "",
    ghibli: true,
    idSong:"1",
    },
    {
    date: "1986",
    movie: "Le Château dans le ciel",
    song: "https://flat.io/embed/633434356f8e2a0012b9b817?_l=true&sharingKey=b6a162eb313e82fae8bde0544689a90aa888ab37b473c39789f35a92903dbab90138567ad89b6115aae4ef11b3262175c11f3548f5582ca0400748c427eab848",
    ghibli: true,
    idSong:"2",
    },
    {
    date: "1988",
    movie: "Mon voisin Totoro",
    song: "https://flat.io/embed/633ff48b9eeb2d00125d3a5c?_l=true&sharingKey=350f03a8cfd973c38f0633688ff5e4af88490279ac60c36137d5d00b7419ea438281a2f61d4e50ec5db1d3c9fa8e61e844c7402e35ed24156bbf27fa7090e5be",
    ghibli: true,
    idSong:"3",
    },
    {
    date: "1992",
    movie: "Porco Rosso",
    song: "",
    ghibli: true,
    idSong:"4",
    },
    {
    date: "1992",
    movie: "A Scene at the Sea",
    song: "https://flat.io/embed/633ff455c20c150012ced851?_l=true&sharingKey=bd49efa1a56141118a7b6cd6ff8f44a57b96be1fa36e403dc8abacce2a0e46b2ef31400fd720d4e3880eaae948ae76ce51ee1f35952d27ae7a52335da994a9f0",
    ghibli: false,
    idSong:"5",
    },
    {
    date: "1993",
    movie: "Sonatine, mélodie mortelle",
    song: "https://flat.io/embed/633ff450015fae0013319477?_l=true&sharingKey=b8e097c4c14368349d6d5a5b4103692125f6e214aabf644700a78fbb3e24e7a9c3cc6e726d38d290c464eb1ae4db90f2fc465922895a3da31e9a3062fccbd4d6",
    ghibli: false,
    idSong:"6",
    },
    {
    date: "1996",
    movie: "Princesse Mononoké",
    song: "https://flat.io/embed/633ff40480081b001352a446?_l=true&sharingKey=79e36177ab8e5da422a23b1af712a094109ebdf854d7a3f41a4cd4a99f79165b5fce525023369d1a245313d56acd12985a664b71221e47d147c4c3c45f7f9d66",
    ghibli: true,
    idSong:"7",
    },
    {
    date: "1996",
    movie: "Kids Return",
    song: "https://flat.io/embed/633ff434b46f1f0013dd3f53?_l=true&sharingKey=38794dd6dbe918f3f8b1c8af5a6da523aa034d04ec0ffb6068e0a1aa6da61044433f206d8f26789e8b6b08187fac2fb37027fee4a761606a5d3405c05ab9b65c",
    ghibli: false,
    idSong:"8",
    },
    {
    date: "1998",
    movie: "Hana-bi",
    song: "https://flat.io/embed/633ff53380081b001352b7bf?_l=true&sharingKey=dfe57293da43b5460f699a63293c52c142a3ecd1172d39a3777febf6ddcefe3c9fa8bfde04816f5f9bb5b98f3e4e644a606ec0a0fb796cef3520c3df3e8212fb",
    ghibli: false,
    idSong:"9",
    },
    {
    date: "1999",
    movie: "L'Été de Kikujiro",
    song: "",
    ghibli: false,
    idSong:"10",
    },
    {
    date: "2001",
    movie: "Le Voyage de Chihiro",
    song: "https://flat.io/embed/633ff48b9eeb2d00125d3a5c?_l=true&sharingKey=350f03a8cfd973c38f0633688ff5e4af88490279ac60c36137d5d00b7419ea438281a2f61d4e50ec5db1d3c9fa8e61e844c7402e35ed24156bbf27fa7090e5be",
    ghibli: true,
    idSong:"11",
    },
    {
    date: "2001",
    movie: "Aniki, mon frère",
    song: "https://flat.io/embed/633ff48b9eeb2d00125d3a5c?_l=true&sharingKey=350f03a8cfd973c38f0633688ff5e4af88490279ac60c36137d5d00b7419ea438281a2f61d4e50ec5db1d3c9fa8e61e844c7402e35ed24156bbf27fa7090e5be",
    ghibli: false,
    idSong:"12",
    },
    {
    date: "2001",
    movie: "Le Petit Poucet",
    song: "https://flat.io/embed/633ff48b9eeb2d00125d3a5c?_l=true&sharingKey=350f03a8cfd973c38f0633688ff5e4af88490279ac60c36137d5d00b7419ea438281a2f61d4e50ec5db1d3c9fa8e61e844c7402e35ed24156bbf27fa7090e5be",
    ghibli: false,
    idSong:"13",
    },
    {
    date: "2002",
    movie: "Dolls",
    song: "",
    ghibli: false,
    idSong:"14",
    },
    {
    date: "2004",
    movie: "Le Mécano de la « General »",
    song: "https://flat.io/embed/633ff48b9eeb2d00125d3a5c?_l=true&sharingKey=350f03a8cfd973c38f0633688ff5e4af88490279ac60c36137d5d00b7419ea438281a2f61d4e50ec5db1d3c9fa8e61e844c7402e35ed24156bbf27fa7090e5be",
    ghibli: false,
    idSong:"15",
    },
    {
    date: "2004",
    movie: "Le Château ambulant",
    song: "",
    ghibli: true,
    idSong:"16",
    },
    {
    date: "2008",
    movie: "Ponyo sur la falaise",
    song: "https://flat.io/embed/633ff48b9eeb2d00125d3a5c?_l=true&sharingKey=350f03a8cfd973c38f0633688ff5e4af88490279ac60c36137d5d00b7419ea438281a2f61d4e50ec5db1d3c9fa8e61e844c7402e35ed24156bbf27fa7090e5be",
    ghibli: true,
    idSong:"17",
    },
    {
    date: "2008",
    movie: "Departures",
    song: "https://flat.io/embed/633ff48b9eeb2d00125d3a5c?_l=true&sharingKey=350f03a8cfd973c38f0633688ff5e4af88490279ac60c36137d5d00b7419ea438281a2f61d4e50ec5db1d3c9fa8e61e844c7402e35ed24156bbf27fa7090e5be",
    ghibli: false,
    idSong:"18",
    },
    {
    date: "2013",
    movie: "Le vent se lève",
    song: "",
    ghibli: true,
    idSong:"19",
    },
    {
    date: "2013",
    movie: "Le Conte de la princesse Kaguya",
    song: "",
    ghibli: true,
    idSong:"20",
    },
    {
    date: "2013",
    movie: "Ni no kuni : La Vengeance de la sorcière céleste",
    song: "",
    ghibli: true,
    idSong:"21",
    },
    {
    date: "2018",
    movie: "Ni no kuni II : L'Avènement d'un nouveau royaume",
    song: "https://flat.io/embed/633ff48b9eeb2d00125d3a5c?_l=true&sharingKey=350f03a8cfd973c38f0633688ff5e4af88490279ac60c36137d5d00b7419ea438281a2f61d4e50ec5db1d3c9fa8e61e844c7402e35ed24156bbf27fa7090e5be",
    ghibli: true,
    idSong:"22",
    },
    {
    date: "2019",
    movie: "Les Enfants de la mer",
    song: "",
    ghibli: false,
    idSong:"23",
    },
];

const songs = document.querySelector(".disco");

function createSong(dateC, movieC, songC, ghibliC, idSongC) {
    
    const song = document.createElement("div");
    song.classList.add("song");
    songs.appendChild(song); 
    if (ghibliC) {
        song.style.backgroundImage =  `url(assets/img/Logo_Ghibli.svg)`;
        song.classList.add("ghibli");
    }
    else {
        song.style.backgroundImage =  `url(assets/img/movie-video-tape.svg)`;
        
    }

    const songTitle = document.createElement("p");
    songTitle.classList.add("song-title");
    songTitle.innerHTML = movieC;
    song.appendChild(songTitle);

    const songDate = document.createElement("p");
    songDate.classList.add("song-date");
    songDate.innerHTML = dateC;
    song.appendChild(songDate);

    const songPart = document.createElement("div");
    songPart.classList.add("song-part");

    song.appendChild(songPart);


    if (songC !==""){

        const songLink = document.createElement("button");
        songLink.classList.add("modal-btn");
        songLink.classList.add("modal-trigger");
        songLink.setAttribute('id',idSongC);
           
        songPart.appendChild(songLink);  
        songPart.style.backgroundImage =  `url(assets/img/play-button.svg)`;
        songPart.style.backgroundRepeat =  `no-repeat`;
    }

}

for (let i = 0; i < discoArray.length; i++) {
    createSong(discoArray[i].movie, discoArray[i].date, discoArray[i].song,discoArray[i].ghibli,discoArray[i].idSong);
  }

/*Fenetre Modal*/
const modalContainer = document.querySelector(".modal-container");
const modalWindow = document.querySelector(".modal");
const modalTriggers = document.querySelectorAll(".modal-trigger");
 
modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(e){
  modalContainer.classList.toggle("active");  
    const modalBtn = parseInt(e.currentTarget.getAttribute('id'));
    let iframeSong = document.createElement("iframe");
    if (!(isNaN(modalBtn))){
    
    iframeSong.setAttribute("src", discoArray[parseInt(modalBtn)-1].song);
    iframeSong.style.width = "95%";
    iframeSong.style.height = "480px";
    modalWindow.appendChild(iframeSong);  
    document.getElementById("modalId").style.top = (modalBtn*2.8+10).toString()+"%"; 
  }
  else {
    modalWindow.removeChild(modalWindow.lastChild);
  }
}
/*Fenetre Modal*/
