import { Funkcionar } from "./Oseba";
import { Igralec } from "./Oseba";

export class Ekipa {

    id!: number;
    ime: string;
    letoUstanovitve: number;
    direktor: Funkcionar;
    trener: Funkcionar;
    igralci: Igralec[];

    constructor(id: number, ime: string, letoUstanovitve: number, dirketor: Funkcionar, trener: Funkcionar, igralci: Igralec[] = []) {
        this.id = id;
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve;
        this.direktor = dirketor;
        this.trener = trener;
        this.igralci = igralci;
    }

    dodajIgralca(igralec: Igralec): void {
        const igralec2 = igralec
        this.igralci.push(igralec2);
        console.log(`Igralec dodan ${igralec2.ime}`)
    }

    posodobiIgralca(igralec: Igralec) {
        console.log(this.igralci);


        const index = this.igralci.findIndex(i => i?.id == igralec.id);
        // i?.id ce je undefined dostopa do id druagce skipne 

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
            if (igralec.visina != null) {
                this.igralci[index].visina = igralec.visina;
            }
            if (igralec.teza != null) {
                this.igralci[index].teza = igralec.teza;
            }
            if (igralec.poskodovan != null) {
                this.igralci[index].poskodovan = igralec.poskodovan;
            }

        }
    }

    odstraniIgralca(id: number): void {
        const index = this.igralci.findIndex(i => i.id == id);

        if (index > -1) {
            delete this.igralci[index];
        }
    }

    izpisiPodatke(): string {

        const besedilo = this.igralci.map(item => `${item.id} in ${item.ime}`).join(" in ")
        const podatki = `Ime ekipe : ${this.ime}\nLeto ustanovitve : ${this.letoUstanovitve}\nDirektor : ${this.direktor.ime}\nTrener : ${this.trener.ime}\nIgralci : ${besedilo}`


        console.log(this.igralci)

        // this.igralci.forEach(function (igralec) { console.log(igralec.ime) })


        return podatki;
    }

}