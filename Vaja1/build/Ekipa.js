"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ekipa = void 0;
class Ekipa {
    constructor(ime, letoUstanovitve, dirketor, trener) {
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve;
        this.direktor = dirketor;
        this.trener = trener;
        this.igralci = [];
    }
    dodajIgralca(igralec) {
        const igralec2 = igralec;
        this.igralci.push(igralec2);
        console.log(`Igralec dodan ${igralec2.ime}`);
    }
    posodobiIgralca(igralec) {
        console.log(this.igralci);
        const index = this.igralci.findIndex(i => (i === null || i === void 0 ? void 0 : i.id) == igralec.id);
        if (index > -1) {
            if (igralec.ime != null) {
                this.igralci[index].ime = igralec.ime;
            }
            if (igralec.priimek != null) {
                this.igralci[index].priimek = igralec.priimek;
            }
            if (igralec.letoRojstva != null) {
                this.igralci[index].letoRojstva = igralec.letoRojstva;
            }
            if (igralec.krajRojstva != null) {
                this.igralci[index].krajRojstva = igralec.krajRojstva;
            }
            if (igralec.poskodovan != null) {
                this.igralci[index].poskodovan = igralec.poskodovan;
            }
            if (igralec.id != null) {
                console.log("Ne drmaj");
                this.igralci[index].id = igralec.id;
                console.log(igralec.id);
            }
            if (igralec.visisna != null) {
                this.igralci[index].visisna = igralec.visisna;
            }
            if (igralec.teza != null) {
                this.igralci[index].teza = igralec.teza;
            }
            if (igralec.poskodovan != null) {
                this.igralci[index].poskodovan = igralec.poskodovan;
            }
        }
    }
    odstraniIgralca(id) {
        const index = this.igralci.findIndex(i => i.id == id);
        if (index > -1) {
            delete this.igralci[index];
        }
    }
    izpisiPodatke() {
        const besedilo = this.igralci.map(item => `${item.id} in ${item.ime}`).join(" in ");
        const podatki = `Ime ekipe : ${this.ime}\nLeto ustanovitve : ${this.letoUstanovitve}\nDirektor : ${this.direktor.ime}\nTrener : ${this.trener.ime}\nIgralci : ${besedilo}`;
        console.log(this.igralci);
        // this.igralci.forEach(function (igralec) { console.log(igralec.ime) })
        return podatki;
    }
}
exports.Ekipa = Ekipa;
