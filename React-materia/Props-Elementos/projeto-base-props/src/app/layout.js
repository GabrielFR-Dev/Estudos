import "./globals.css";


export const metadata = {
  title: "Dentes saúdaveis",
  description: "Projeto base para aprender props e elementos no React",
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
