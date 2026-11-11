import Link from "next/link";

const DEV_NAME = process.env.NEXT_PUBLIC_DEV_NAME ?? "Estanis";
const DEV_EMAIL = process.env.NEXT_PUBLIC_DEV_EMAIL ?? "contato@example.com";
const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME ?? "Combustível — Calculadora e Controle";
const APP_SLUG = process.env.NEXT_PUBLIC_APP_SLUG ?? "combustivel";

export default function TermsPage() {
  return (
    <main>
      <header className="container nav">
        <Link href="/" className="logo">
          {DEV_NAME}
          <span>.</span>
        </Link>
        <Link href={`/apps/${APP_SLUG}`} className="btn secondary">
          ← {APP_NAME.split("—")[0].trim()}
        </Link>
      </header>
      <article className="container legal">
        <div className="eyebrow">{APP_NAME}</div>
        <h1>Termos de Uso</h1>
        <div className="updated">Última atualização: novembro de 2026</div>

        <h2>1. Uso do aplicativo</h2>
        <p>
          O aplicativo fornece ferramentas de cálculo e controle de combustível
          para fins informativos e de organização pessoal. O usuário é
          responsável pelos dados inseridos e pela interpretação dos resultados.
        </p>

        <h2>2. Resultados e estimativas</h2>
        <p>
          Os valores apresentados são calculados a partir das informações
          fornecidas pelo usuário e podem não representar o custo real de uma
          viagem ou abastecimento. Os resultados não constituem garantia de
          consumo, economia ou desempenho do veículo.
        </p>

        <h2>3. Modo Viagem e GPS</h2>
        <p>
          A funcionalidade Modo Viagem utiliza o GPS do dispositivo para medir a
          distância percorrida. A precisão da medição depende da qualidade do
          sinal de GPS, das condições do ambiente (túneis, áreas cobertas) e das
          configurações do dispositivo. A distância calculada pelo app é uma
          estimativa e pode diferir da distância real. O usuário deve iniciar e
          encerrar a viagem manualmente; o aplicativo não assume
          responsabilidade por falhas de rastreio decorrentes de interrupções de
          sinal ou de economia de bateria do sistema operacional.
        </p>

        <h2>4. Mapa e postos de combustível</h2>
        <p>
          Os dados de postos exibidos no mapa são obtidos do OpenStreetMap, uma
          base de dados geográficos mantida por voluntários, e podem estar
          incompletos, incorretos ou desatualizados. O aplicativo não garante a
          exatidão, disponibilidade ou horário de funcionamento dos postos
          exibidos. O usuário deve confirmar as informações diretamente no posto
          antes de tomar decisões com base nelas.
        </p>

        <h2>5. Publicidade</h2>
        <p>
          O aplicativo pode exibir anúncios de terceiros por meio do Google
          AdMob. O conteúdo dos anúncios é determinado pelo Google e seus
          parceiros, não pelo desenvolvedor.
        </p>

        <h2>6. Disponibilidade</h2>
        <p>
          Buscamos manter o aplicativo funcionando corretamente, mas recursos
          podem ser alterados, suspensos ou descontinuados sem aviso prévio e
          sem garantia de disponibilidade contínua. Funcionalidades que dependem
          de serviços de terceiros (mapa, postos, verificação de atualização)
          estão sujeitas à disponibilidade desses serviços.
        </p>

        <h2>7. Responsabilidade</h2>
        <p>
          O aplicativo não deve ser utilizado como única fonte para decisões
          financeiras, operacionais ou de segurança. O usuário deve conferir os
          dados utilizados nos cálculos e as informações obtidas de fontes
          externas (como dados de postos do OpenStreetMap).
        </p>

        <h2>8. Propriedade intelectual</h2>
        <p>
          O código, o design e os recursos visuais do aplicativo são de
          titularidade do desenvolvedor. Os dados de mapa são fornecidos pelo
          OpenStreetMap sob licença ODbL (opendatacommons.org/licenses/odbl).
        </p>

        <h2>9. Alterações</h2>
        <p>
          Estes termos podem ser atualizados quando houver mudanças relevantes
          no aplicativo ou em suas condições de uso. A data de atualização no
          topo da página será alterada quando uma nova versão for publicada.
        </p>

        <h2>10. Contato</h2>
        <p>
          Para dúvidas sobre estes termos, entre em contato pelo e-mail{" "}
          <a href={`mailto:${DEV_EMAIL}`}>{DEV_EMAIL}</a>.
        </p>
      </article>
    </main>
  );
}
