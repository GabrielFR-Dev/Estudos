
import "./globals.css";

export const metadata = {
  title: "COLEÇÃO DE DADOS",
  description: "filtrando elementos utilizando o filter e o map ",
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
