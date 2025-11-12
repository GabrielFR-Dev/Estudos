import "./globals.css";


export const metadata = {
  title: "Consumindo uma api ",
  description: "Consumindo uma api sobre a tabela ufs",
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
