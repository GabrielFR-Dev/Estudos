import "./globals.css";


export const metadata = {
  title: "Menu Sanduiche",
  description: "Menu",
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
