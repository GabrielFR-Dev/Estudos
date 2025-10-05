import "./globals.css";

export const metadata = {
  title: "Exemplo 03",
  description: "Exemplo do uso do Hook useState",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pr-br">
      <body>
        {children}
      </body>
    </html>
  );
}
