//Haetaan tietoa
//Saadaan nettisivun kieli
"use strict";

let target = document.getElementById("target");
//haetaan näytön korkeus ja leveys
let width = screen.width;
let height = screen.height;
//Haetaan selaimen korkeus ja leveys
let browserwidth = innerWidth;
let browserheight = innerHeight;

const months = [
  "tammikuu",
  "helmikuu",
  "maaliskuu",
  "huhtikuu",
  "toukokuu",
  "kesäkuu",
  "heinäkuu",
  "elokuu",
  "syyskuu",
  "lokakuu",
  "marraskuu",
  "joulukuu",
];
//haetaan päivämäärä
const paivamaara = new Date();
const kuukausi = months[paivamaara.getMonth()];
//varmistetaan, että minuuteissa on kaksi numeroa
let minutes = paivamaara.getMinutes().toString().padStart(2, "0");
//haetaan vaaditut tiedot ja näytetään ne sivulla
document.getElementById("language").innerText =
  "Selaimen kieli: " + navigator.language;
document.getElementById("screensize").innerText =
  "Näytön koko: " + width + " x " + height;
document.getElementById("windowsize").innerText =
  "Selaimen koko: " + browserwidth + " x " + browserheight;
document.getElementById("dateTime").innerHTML =
  "Päivämäärä ja aika: " +
  paivamaara.getDate() +
  ". " +
  kuukausi +
  " " +
  paivamaara.getHours() +
  ":" +
  minutes;
//lisätään kuva
function addImage(src, alt, imageid) {
  let image = document.createElement("img");

  image.src = src;
  image.alt = alt;
  let kuva1 = document.getElementById(imageid);

  kuva1.appendChild(image);
}
addImage("img/ball.png", "dog", "koirakuva");
