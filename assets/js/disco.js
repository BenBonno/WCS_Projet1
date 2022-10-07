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
    song: "https://flat.io/embed/633434356f8e2a0012b9b817?_l=true&sharingKey=b6a162eb313e82fae8bde0544689a90aa888ab37b473c39789f35a92903dbab90138567ad89b6115aae4ef11b3262175c11f3548f5582ca0400748c427eab848",
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
    song: "https://flat.io/embed/633434356f8e2a0012b9b817?_l=true&sharingKey=b6a162eb313e82fae8bde0544689a90aa888ab37b473c39789f35a92903dbab90138567ad89b6115aae4ef11b3262175c11f3548f5582ca0400748c427eab848",
    ghibli: false,
    idSong:"5",
    },
    {
    date: "1993",
    movie: "Sonatine, mélodie mortelle",
    song: "https://flat.io/embed/633434356f8e2a0012b9b817?_l=true&sharingKey=b6a162eb313e82fae8bde0544689a90aa888ab37b473c39789f35a92903dbab90138567ad89b6115aae4ef11b3262175c11f3548f5582ca0400748c427eab848",
    ghibli: false,
    idSong:"6",
    },
    {
    date: "1996",
    movie: "Princesse Mononoké",
    song: "https://flat.io/embed/633434356f8e2a0012b9b817?_l=true&sharingKey=b6a162eb313e82fae8bde0544689a90aa888ab37b473c39789f35a92903dbab90138567ad89b6115aae4ef11b3262175c11f3548f5582ca0400748c427eab848",
    ghibli: true,
    idSong:"7",
    },
    {
    date: "1996",
    movie: "Kids Return",
    song: "https://flat.io/embed/633434356f8e2a0012b9b817?_l=true&sharingKey=b6a162eb313e82fae8bde0544689a90aa888ab37b473c39789f35a92903dbab90138567ad89b6115aae4ef11b3262175c11f3548f5582ca0400748c427eab848",
    ghibli: false,
    idSong:"8",
    },
    {
    date: "1998",
    movie: "Hana-bi",
    song: "https://flat.io/embed/633434356f8e2a0012b9b817?_l=true&sharingKey=b6a162eb313e82fae8bde0544689a90aa888ab37b473c39789f35a92903dbab90138567ad89b6115aae4ef11b3262175c11f3548f5582ca0400748c427eab848",
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
    song: "",
    ghibli: true,
    idSong:"11",
    },
    {
    date: "2001",
    movie: "Aniki, mon frère",
    song: "",
    ghibli: false,
    idSong:"12",
    },
    {
    date: "2001",
    movie: "Le Petit Poucet",
    song: "",
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
    song: "",
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
    song: "",
    ghibli: true,
    idSong:"17",
    },
    {
    date: "2008",
    movie: "Departures",
    song: "",
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
    song: "",
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