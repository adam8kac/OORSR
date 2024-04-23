import './App.css'
import Menu from './components/Menu'
import Noga from './components/Noga'
import Telo from './components/Telo'
import seznamEkip from './components/SeznamEkip'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import { useState } from "react"
import { Ekipa } from '../../Ekipa'
// import { Ekipa } from '../../Ekipa'


const SeznamEkip = () => {
  return (
    <div className="ekipa-list">
      <ul>
        {seznamEkip.map((ekipa) => (
          <li key={ekipa.id}>
            <Link to={`/ekipa/${ekipa.id}`}>{ekipa.ime}</Link>
          </li>
        ))}
      </ul>
    </div >
  );
}

const Header = () => {
  return (
    <div>
      <h1>Seznam ekip</h1>
      <SeznamEkip />
    </div>
  );
}

const Ekipa = () => {
  const { index } = useParams();
  const ekipa = seznamEkip.find(e => index && e.id === parseInt(index));

  console.log(ekipa);
  return (
    <div>
      {ekipa && <>
        <Menu imeEkipe={ekipa.ime} />
        <Telo ekipa={ekipa} />
      </>}
    </div>
  );
}


export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/ekipa/:index" element={<Ekipa />} />
            <Route path="/dodajEkipo" element={<DodajEkipo />} />
          </Routes>
          <Noga />
        </div>
      </BrowserRouter>
    </>
  );
}

const initialStateEkipe: Ekipa = {
  id: Math.floor(Math.random() * 100),
  ime: '',
  letoUstanovitve: 0,
  direktor: {
    ime: "",
    priimek: "",
    letoRojstva: 0,
    id: 0,
    vloga: "",
    veljavnost: 0
  },
  trener: {
    ime: "",
    priimek: "",
    letoRojstva: 0,
    id: 0,
    vloga: "",
    veljavnost: 0
  },
  igralci: []
};
export const DodajEkipo = () => {
  const [ime, setIme] = useState("");

  const handleImeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIme(event.target.value);
  }

  return (
    <>
      <form onSubmit={() => {
        console.log(ime);
      }}>
        Ime:
        <input name="imeIgralca" value={ime} onChange={handleImeChange}></input><br />
      </form>
    </>
  );
}

// export const DodajIgralca = () => {

//   const [ime, setIme] = useState("");
//   const [priimek, setPriimek] = useState("");
//   const [starost, setStarost] = useState(0);
//   const [visina, setVisina] = useState(0);
//   const [teza, setTeza] = useState(0);
//   const [isPoskodovan, setPoskodovan] = useState(false);

// return (
//   <form onSubmit={ }>
//     Ime:
//     <input name="imeIgralca"></input><br />
//     Priimek:
//     <input name="priimekIgralca"></input><br />
//     Starost:
//     <input name="starostIgralca"></input><br />
//     Višina:
//     <input name="visinaIgralca"></input><br />
//     Teža:
//     <input name="tezaIgralca"></input><br />
//     Poskodovan:
//     <input type="checkbox" name="isPoskodovan"></input><br />
//     <button>Dodaj igralca</button>
//   </form>
// )
// }