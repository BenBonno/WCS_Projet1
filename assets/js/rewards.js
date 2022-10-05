const rewardsArray = [
    {
    date: "Date",
    event: "Cérémonie",
    reward: "Récompense",
    },
    {
    date: "1992",
    event: "15e cérémonie des prix de l'Académie japonaise",
    reward: "Meilleure musique pour A Scene at the Sea, Kojika Monogatari, Futari et Fukuzawa Yukichi",
    },
    {
    date: "1992",
    event: "Prix du film Mainichi",
    reward: "Meilleure musique pour A Scene at the Sea",
    },
    {
    date: "1993",
    event: "16e cérémonie des prix de l'Académie japonaise",
    reward: "Meilleure musique pour Porco Rosso et Seisyun Den Deke-Deke-Deke",
    },
    {
    date: "1994",
    event: "17e cérémonie des prix de l'Académie japonaise",
    reward: "Meilleure musique pour Sonatine, mélodie mortelle, Haruka et Samuraï Enfants",
    }, 
    {
    date: "1998",
    event: "3e prix de la Japanese Society for Rights of Authors, Composers and Publishers",
    reward: "Pour Princesse Mononoké",
    },
    {
    date: "1999",
    event: "22e cérémonie des prix de l'Académie japonaise",
    reward: "Meilleure musique pour Hana-bi",
    },
    {
    date: "2000",
    event: "23e cérémonie des prix de l'Académie japonaise",
    reward: "Meilleure musique pour L'Été de Kikujiro",
    },
    {
    date: "2002",
    event: "30e cérémonie des Annie Award",
    reward: "Meilleure musique pour Le Voyage de Chihiro",
    },
    {
    date: "2002",
    event: "16e prix du disque d'or japonais",
    reward: "Meilleure musique pour un film d'animation pour Le Voyage de Chihiro",
    },
    {
    date: "2002",
    event: "1er prix de la Japanese Society for Rights of Authors, Composers and Publishers",
    reward: "Pour Le Voyage de Chihiro",
    },
    {
    date: "2005",
    event: "4e cérémonie des Awards coréen",
    reward: "Meilleure musique pour Welcome to Dongmakgol",
    },
    {
    date: "2005",
    event: "31e cérémonie de la Los Angeles Film Critics Association",
    reward: "Meilleure performance pour la musique du film Le Château ambulant",
    },  
    {
    date: "2007",
    event: "1er prix de la Japanese Society for Rights of Authors, Composers and Publishers",
    reward: "Pour Le Château ambulant",
    },
    {
    date: "2007",
    event: "6e cérémonie de l'International Film Music Critics Association",
    reward: "Meilleure musique de télévision pour Sashingi Taewang",
    },
    {
    date: "2009",
    event: "27e cérémonie des Hong Kong Film Awards",
    reward: "Meilleure musique pour La Vie postmoderne de ma tante",
    },
    {
    date: "2009",
    event: "32e cérémonie des prix de l'Académie japonaise",
    reward: "Meilleure musique pour Ponyo sur la falaise",
    },
    {
    date: "2011",
    event: "34e cérémonie des prix de l'Académie japonaise",
    reward: "Meilleure musique pour Akunin",
    },
    {
    date: "2011",
    event: "10e cérémonie des International Film Music Critics Association",
    reward: "Meilleure bande son de l'année pour Ni no Kuni : Wrath of the White Witch",
    },
  ];

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the section tag
document.querySelector(".rewards").appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = rewardsArray[0].date;
let heading_2 = document.createElement("th");
heading_2.innerHTML = rewardsArray[0].event;
let heading_3 = document.createElement("th");
heading_3.innerHTML = rewardsArray[0].reward;

heading_1.classList.add("column1");
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

for (let i = 1; i < rewardsArray.length; i++) {
  let row = document.createElement("tr");
  let row_data_1 = document.createElement("td");
  row_data_1.innerHTML = rewardsArray[i].date;
  row_data_1.classList.add("column1");
  let row_data_2 = document.createElement("td");
  row_data_2.innerHTML = rewardsArray[i].event;
  let row_data_3 = document.createElement("td");
  row_data_3.innerHTML = rewardsArray[i].reward;

  row.appendChild(row_data_1);
  row.appendChild(row_data_2);
  row.appendChild(row_data_3);
  tbody.appendChild(row);
}