import "./globals.css";



export const metadata = {
  title: "Props Elementos 01",
  description: "Exemplo 01",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
