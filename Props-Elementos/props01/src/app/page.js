/*Estrututando pagina teste Props */

import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/componente/card";

export default function Home() {
  return (
    <div>
      <Card
        titulo={'Games'}
        preco={2} 
      />
    </div>
  );
}
