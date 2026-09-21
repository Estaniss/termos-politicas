import Link from "next/link";

export default function PrivacyPage() {
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
        <h1>Política de Privacidade</h1>
        <div className="updated">Última atualização: setembro de 2026</div>
        <div className="notice">
          Esta política descreve, em linguagem simples, como o aplicativo trata
          informações e quais serviços de terceiros podem participar do
          funcionamento do app.
        </div>
        <h2>1. Quem somos</h2>
        <p>
          O aplicativo é desenvolvido por Estanis. Para assuntos relacionados à
          privacidade, entre em contato pelo e-mail{" "}
          <a href="mailto:estanislauthomas@gmail.com">
            estanislauthomas@gmail.com
          </a>
          .
        </p>
        <h2>2. Informações armazenadas no dispositivo</h2>
        <p>
          O aplicativo pode armazenar localmente informações fornecidas pelo
          usuário, como dados de veículo, preços de combustível e registros de
          abastecimento. Esses dados são usados para disponibilizar as
          funcionalidades do aplicativo e permanecem no dispositivo, salvo
          quando o próprio sistema operacional ou o usuário os remove.
        </p>
        <h2>3. Publicidade</h2>
        <p>
          O aplicativo utiliza o Google AdMob para exibir anúncios. O Google e
          seus parceiros podem tratar informações técnicas e identificadores do
          dispositivo, além de informações relacionadas à publicidade e
          interação com anúncios, de acordo com as configurações do dispositivo,
          da região e das políticas do Google.
        </p>
        <h2>4. Analytics</h2>
        <p>
          O aplicativo utiliza Firebase Analytics para obter informações
          agregadas sobre o uso de funcionalidades, desempenho de uso e eventos
          configurados pelo aplicativo. Esses dados ajudam a entender como o
          aplicativo é utilizado e a melhorar a experiência.
        </p>
        <h2>5. Serviços de terceiros</h2>
        <p>
          O aplicativo pode utilizar serviços do Google, incluindo Google AdMob
          e Firebase Analytics. O tratamento realizado por esses serviços está
          sujeito às respectivas políticas e configurações do fornecedor.
        </p>
        <h2>6. Segurança</h2>
        <p>
          Adotamos medidas técnicas razoáveis para o funcionamento seguro do
          aplicativo. Nenhum sistema conectado à internet ou dispositivo pode
          ser considerado absolutamente seguro.
        </p>
        <h2>7. Crianças</h2>
        <p>
          O aplicativo não é direcionado especificamente a crianças. Caso você
          entenda que informações foram fornecidas de maneira inadequada por uma
          criança, entre em contato para que a situação possa ser analisada.
        </p>
        <h2>8. Alterações</h2>
        <p>
          Esta política pode ser atualizada para refletir mudanças no
          aplicativo, nos serviços utilizados ou em requisitos legais. A data de
          atualização será alterada quando uma nova versão for publicada.
        </p>
        <h2>9. Contato</h2>
        <p>
          Dúvidas ou solicitações relacionadas à privacidade podem ser
          encaminhadas para{" "}
          <a href="mailto:estanislauthomas@gmail.com">
            estanislauthomas@gmail.com
          </a>
          .
        </p>
      </article>
    </main>
  );
}
