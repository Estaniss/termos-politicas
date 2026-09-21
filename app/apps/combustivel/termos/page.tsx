import Link from "next/link";

export default function TermsPage() {
  return (
    <main>
      <header className="container nav">
        <Link href="/" className="logo">
          Estanis<span>.</span>
        </Link>
        <Link href="/apps/combustivel" className="btn secondary">
          ← Combustível
        </Link>
      </header>
      <article className="container legal">
        <div className="eyebrow">Combustível — Calculadora e Controle</div>
        <h1>Termos de Uso</h1>
        <div className="updated">Última atualização: setembro de 2026</div>
        <h2>1. Uso do aplicativo</h2>
        <p>
          O aplicativo fornece ferramentas de cálculo e controle para fins
          informativos e de organização pessoal. O usuário é responsável pelos
          dados inseridos e pela interpretação dos resultados.
        </p>
        <h2>2. Resultados e estimativas</h2>
        <p>
          Os valores apresentados são calculados a partir das informações
          fornecidas pelo usuário e podem não representar o custo real de uma
          viagem ou abastecimento. Os resultados não constituem garantia de
          consumo, economia ou desempenho.
        </p>
        <h2>3. Publicidade</h2>
        <p>
          O aplicativo pode exibir anúncios de terceiros por meio do Google
          AdMob.
        </p>
        <h2>4. Disponibilidade</h2>
        <p>
          Buscamos manter o aplicativo funcionando corretamente, mas recursos
          podem ser alterados, suspensos ou descontinuados sem garantia de
          disponibilidade contínua.
        </p>
        <h2>5. Responsabilidade</h2>
        <p>
          O aplicativo não deve ser utilizado como única fonte para decisões
          financeiras, operacionais ou de segurança. O usuário deve conferir os
          dados utilizados nos cálculos.
        </p>
        <h2>6. Alterações</h2>
        <p>
          Estes termos podem ser atualizados quando houver mudanças relevantes
          no aplicativo ou em suas condições de uso.
        </p>
        <h2>7. Contato</h2>
        <p>
          Para dúvidas sobre estes termos, entre em contato pelo e-mail{" "}
          <a href="mailto:estanislauthomas@gmail.com">
            estanislauthomas@gmail.com
          </a>
          .
        </p>
      </article>
    </main>
  );
}
