import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="container nav">
        <Link href="/" className="logo">
          Estanis<span>.</span>
        </Link>
        <nav className="navlinks">
          <a href="#apps">Aplicativos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="container hero">
          <div>
            <div className="eyebrow">Estanis Apps</div>
            <h1>Apps simples para resolver problemas reais.</h1>
            <p className="lead">
              Uma coleção de aplicativos práticos, leves e fáceis de usar.
              Começando pelo Combustível — Calculadora e Controle.
            </p>
            <div className="actions">
              <a className="btn primary" href="#apps">
                Conhecer os apps
              </a>
              <a
                className="btn secondary"
                href="mailto:estanislauthomas@gmail.com"
              >
                Entrar em contato
              </a>
            </div>
          </div>
          <div className="mock" aria-label="Prévia do aplicativo Combustível">
            <div className="eyebrow">Em destaque</div>
            <div className="mock-card">
              <div style={{ fontSize: 14, color: "var(--muted)" }}>
                Combustível
              </div>
              <div className="mock-number">R$ 0,00</div>
              <div style={{ color: "var(--muted)" }}>estimativa da viagem</div>
            </div>
            <div className="mock-card">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Gasolina</span>
                <strong>R$ 5,99/L</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 12,
                }}
              >
                <span>Etanol</span>
                <strong>R$ 4,19/L</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="apps" className="section">
          <div className="container">
            <h2>Aplicativos</h2>
            <p className="section-intro">
              Projetos desenvolvidos para serem úteis no dia a dia, com foco em
              simplicidade e experiência direta.
            </p>
            <div className="grid">
              <article className="card app-card">
                <div>
                  <div className="icon">⛽</div>
                  <span className="badge">Disponível</span>
                  <h3 className="app-title">Combustível</h3>
                  <p>
                    Calcule gastos de viagem, compare gasolina e etanol e
                    registre abastecimentos.
                  </p>
                </div>
                <div className="actions" style={{ marginTop: 0 }}>
                  <Link className="btn primary" href="/apps/combustivel">
                    Ver app
                  </Link>
                </div>
              </article>
              <article className="card">
                <div className="icon">＋</div>
                <h3>Próximo app</h3>
                <p>
                  Novos aplicativos serão adicionados aqui conforme forem
                  publicados.
                </p>
              </article>
              <article className="card">
                <div className="icon">✦</div>
                <h3>Projetos futuros</h3>
                <p>
                  Ideias pequenas, úteis e independentes, construídas para
                  facilitar tarefas do cotidiano.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container">
            <h2>Sobre</h2>
            <p className="section-intro">
              Estanis Apps é o espaço central para os aplicativos desenvolvidos
              por Estanis. Cada projeto possui suas próprias informações,
              políticas e páginas de suporte.
            </p>
          </div>
        </section>
      </main>

      <footer id="contato">
        <div className="container footer-row">
          <span>© {new Date().getFullYear()} Estanis Apps</span>
          <span>
            <a href="mailto:estanislauthomas@gmail.com">
              estanislauthomas@gmail.com
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
