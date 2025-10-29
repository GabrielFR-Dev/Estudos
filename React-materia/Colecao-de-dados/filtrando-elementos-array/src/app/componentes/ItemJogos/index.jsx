import estilos from "./ItemJogos.module.css";
import Image from "next/image";
import xboxlogo from "/public/xbox-logo.png";
import playstationLogo from "/public/playstation-logo.jpg";
import nintendoLogo from "/public/nintendo-logo.jpg";

export default function ItemJogos ({ nome, plataforma}) {
    return (
        <div className={estilos.card}>
            <figure>
                <Image
                    src={
                        plataforma === 'xbox'
                        ? xboxlogo
                        : plataforma === 'playstation'
                        ? playstationLogo
                        : nintendoLogo
                    }
                />
            </figure>
            <div className={estilos.nome}>
                <p>{nome}</p>
            </div>
        </div>
    );
}