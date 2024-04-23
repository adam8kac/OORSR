import { Ekipa } from "./Ekipa";
import { Igralec } from "./Oseba";
import { Funkcionar } from "./Oseba";


const igralec1: Igralec = {
    ime: "ime",
    priimek: "priimek",
    letoRojstva: 2000,
    id: 1,
    visina: 150,
    teza: 200,
    poskodovan: true
}


const funkcionar1: Funkcionar = {
    ime: "ime",
    priimek: "priimek",
    letoRojstva: 2000,
    id: 1,
    vloga: "trener",
    veljavnost: 1
}

const ekipa1 = new Ekipa("grr", 2000, funkcionar1, funkcionar1);

ekipa1.dodajIgralca(igralec1);
// ekipa1.dodajIgralca(igralec1);
console.log()
ekipa1.odstraniIgralca(1);
igralec1.ime = "vinko"
console.log(ekipa1.izpisiPodatke());
ekipa1.posodobiIgralca(igralec1);

console.log(ekipa1.izpisiPodatke())