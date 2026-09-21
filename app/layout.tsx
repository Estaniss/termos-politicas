import './globals.css';

export const metadata = {
  title: 'Estanis Apps',
  description: 'Aplicativos simples e úteis desenvolvidos por Estanis.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
