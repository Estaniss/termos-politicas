import Link from 'next/link';

export default function CombustivelPage() {
  return (
    <main>
      <header className="container nav"><Link href="/" className="logo">Estanis<span>.</span></Link><Link href="/" className="btn secondary">← Voltar</Link></header>
      <section className="container hero" style={{gridTemplateColumns:'1fr'}}>
        <div>
          <div className="eyebrow">Aplicativo</div>
          <h1>Combustível</h1>
          <p className="lead">Calculadora e Controle para estimar custos de viagens, comparar gasolina e etanol e acompanhar abastecimentos.</p>
          <div className="actions"><span className="badge">Versão 1.0.0</span></div>
        </div>
      </section>
      <section className="section"><div className="container"><div className="grid"><article className="card"><div className="icon">⛽</div><h3>Calculadora</h3><p>Estime o custo da viagem usando distância, consumo e preço do combustível.</p></article><article className="card"><div className="icon">↔</div><h3>Comparação</h3><p>Compare gasolina e etanol com os dados informados para tomar sua própria decisão.</p></article><article className="card"><div className="icon">▣</div><h3>Controle</h3><p>Registre informações de abastecimento localmente no dispositivo.</p></article></div><div className="actions"><Link className="btn secondary" href="/apps/combustivel/privacidade">Política de privacidade</Link><Link className="btn secondary" href="/apps/combustivel/termos">Termos de uso</Link></div></div></section>
    </main>
  );
}
