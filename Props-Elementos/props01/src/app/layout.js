import "./globals.css";



export const metadata = {
  title: "BARALHO DOS SIGNOS",
  description: "Exemplo de props em React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
