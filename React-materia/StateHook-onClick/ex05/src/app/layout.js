import "./globals.css";

export const metadata = {
  title: "Exemplo 5",
  description: "Exemplo do uso do useState",
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
