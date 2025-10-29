import "./globals.css";


export const metadata = {
  title: "Exemplo 04",
  description: "Exemplo 04 do curso de State Hook e evento OnClick",
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
