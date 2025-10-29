import "./globals.css";

export const metadata = {
  title: "Exemplo02",
  description: "Exemplo de useState com onClick",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pr=br">
      <body>
        {children}
      </body>
    </html>
  );
}
