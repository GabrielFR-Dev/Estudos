import "./globals.css";


export const metadata = {
  title: "Props com useState",
  description: "projeto props com useState versao 1 ",
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
