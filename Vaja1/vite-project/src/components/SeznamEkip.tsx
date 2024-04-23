import { Funkcionar, Igralec } from "../../../Oseba";
import { Ekipa } from "../../../Ekipa";

// const igralci = 

// const trener: Funkcionar = { ime: "Zmago", priimek: "Zmago", letoRojstva: 1990, krajRojstva: "Zmago", id: 1 };


const igralec1: Igralec = {
    ime: "ime",
    priimek: "priimek",
    letoRojstva: 2000,
    id: 1,
    visina: 150,
    teza: 200,
    poskodovan: true
}


const igralec2: Igralec = {
    ime: "ime",
    priimek: "priimek",
    letoRojstva: 2000,
    id: 2,
    visina: 150,
    teza: 200,
    poskodovan: false
}

const funkcionar1: Funkcionar = {
    ime: "ime",
    priimek: "priimek",
    letoRojstva: 2000,
    id: 3,
    vloga: "trener",
    veljavnost: 1
}
const igralci = [igralec1, igralec2];
// console.log(igralci.map(igralec => igralec.ime));
const igralci2 = [igralec1, igralec2, igralec1, igralec2, igralec1, igralec2, igralec1, igralec2, igralec1, igralec2, igralec1, igralec2, igralec1, igralec2,];
// console.log(igralci2.map(igralec => igralec.ime));

const ekipa = new Ekipa(1, "grr", 2000, funkcionar1, funkcionar1, igralci);

const ekipa2 = new Ekipa(2, "aaagrr", 2000, funkcionar1, funkcionar1, igralci2);
// console.log(ekipa.igralci.length);
// console.log(ekipa2.igralci.length);

const seznamEkip = [ekipa, ekipa2];


export default seznamEkip;