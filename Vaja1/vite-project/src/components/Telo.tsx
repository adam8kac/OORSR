import { Ekipa } from "../../../Ekipa";
import Info from "./Info";
import Opozorilo from "./Opozorilo";
import Igralec from "./Igralec";

interface TeloProps {
    ekipa: Ekipa;
}

const Telo = ({ ekipa }: TeloProps) => {
    const igralci = ekipa.igralci;

    return (
        <div>
            {igralci.length >= 11 ? <Info /> : <Opozorilo />}
            {igralci.map(igralec => (
                <Igralec
                    key={`${igralec.id}`}
                    ime={igralec.ime}
                    priimek={igralec.priimek}
                    starost={igralec.letoRojstva}
                    visina={igralec.visina}
                    teza={igralec.teza}
                    poskodovan={igralec.poskodovan}
                />
            ))}
        </div >
    )
};

export default Telo;
