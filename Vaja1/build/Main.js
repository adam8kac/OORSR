"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ekipa_1 = require("./Ekipa");
const igralec1 = {
    ime: "ime",
    priimek: "priimek",
    letoRojstva: 2000,
    id: 1,
    visisna: 150,
    teza: 200,
    poskodovan: true
};
const funkcionar1 = {
    ime: "ime",
    priimek: "priimek",
    letoRojstva: 2000,
    id: 1,
    vloga: "trener",
    veljavnost: 1
};
const ekipa1 = new Ekipa_1.Ekipa("grr", 2000, funkcionar1, funkcionar1);
ekipa1.dodajIgralca(igralec1);
// ekipa1.dodajIgralca(igralec1);
console.log();
ekipa1.odstraniIgralca(1);
igralec1.ime = "vinko";
console.log(ekipa1.izpisiPodatke());
ekipa1.posodobiIgralca(igralec1);
console.log(ekipa1.izpisiPodatke());
