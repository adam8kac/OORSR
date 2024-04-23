import '../css/igralci.css';

interface IgralecProps {
    ime: string;
    priimek: string;
    starost: number;
    visina: number;
    teza: number;
    poskodovan: boolean;
}

const Igralec = ({ ime, priimek, starost, visina, teza, poskodovan }: IgralecProps) => {
    return (
        <div className="igralec-container">
            <p><span>Ime:</span> {ime}</p>
            <p><span>Priimek:</span> {priimek}</p>
            <p><span>Starost:</span> {starost}</p>
            <p><span>Višina:</span> {visina}</p>
            <p><span>Teža:</span> {teza}</p>
            <p className={poskodovan ? "poškodovan" : ""}><span>Poškodovan:</span> {poskodovan ? "Da" : "Ne"}</p>
        </div>
    );
};

export default Igralec;

// lahko tudi export const player () => {}... gre za component