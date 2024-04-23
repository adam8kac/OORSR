import '../css/menu.css'

interface MenuProps {
    imeEkipe: string;
}

const menu = ({ imeEkipe }: MenuProps) => {
    return (
        <div>
            <h1>Ime ekipe: {imeEkipe}</h1>
        </div>
    );
};

export default menu;