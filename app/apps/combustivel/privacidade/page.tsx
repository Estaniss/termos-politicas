import Link from "next/link";

const DEV_NAME = process.env.NEXT_PUBLIC_DEV_NAME ?? "Estanis";
const DEV_EMAIL = process.env.NEXT_PUBLIC_DEV_EMAIL ?? "contato@example.com";
const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME ?? "Combustível — Calculadora e Controle";
const APP_SLUG = process.env.NEXT_PUBLIC_APP_SLUG ?? "combustivel";

export default function PrivacyPage() {
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
        <h1>Política de Privacidade</h1>
        <div className="updated">Última atualização: novembro de 2026</div>
        <div className="notice">
          Esta política descreve, em linguagem simples, como o aplicativo trata
          informações e quais serviços de terceiros participam do seu
          funcionamento.
        </div>

        <h2>1. Quem somos</h2>
        <p>
          O aplicativo é desenvolvido por {DEV_NAME}. Para assuntos relacionados
          à privacidade, entre em contato pelo e-mail{" "}
          <a href={`mailto:${DEV_EMAIL}`}>{DEV_EMAIL}</a>.
        </p>

        <h2>2. Informações armazenadas no dispositivo</h2>
        <p>
          O aplicativo armazena localmente no dispositivo as informações
          fornecidas pelo usuário: dados de veículo (nome, marca, modelo,
          consumo, capacidade do tanque), registros de abastecimento e histórico
          de cálculos. Esses dados são usados exclusivamente para disponibilizar
          as funcionalidades do app e não são enviados a servidores do
          desenvolvedor. Permanecem no dispositivo até que o usuário os remova
          ou desinstale o aplicativo.
        </p>

        <h2>3. Localização e GPS</h2>
        <p>
          O aplicativo pode solicitar acesso à localização do dispositivo em
          dois contextos:
        </p>
        <ul>
          <li>
            <strong>Modo Viagem:</strong> quando o usuário inicia manualmente
            uma viagem, o aplicativo usa o GPS para medir a distância percorrida
            em tempo real. O rastreio ocorre como um serviço em primeiro plano
            (com notificação visível na barra de status) e é encerrado quando o
            usuário finaliza ou cancela a viagem. A distância total calculada é
            armazenada localmente; o trajeto completo não é gravado nem enviado
            a terceiros.
          </li>
          <li>
            <strong>Mapa de postos:</strong> quando o usuário acessa a tela de
            postos próximos, a posição aproximada do dispositivo é enviada ao
            serviço Overpass API (baseado em dados do OpenStreetMap) para
            localizar postos de combustível na região. Essa consulta ocorre
            somente mediante ação explícita do usuário e é armazenada em cache
            local por até 10 minutos para reduzir requisições repetidas.
          </li>
        </ul>
        <p>
          A permissão de localização é solicitada somente quando o usuário
          acessa essas funcionalidades. O aplicativo não rastreia a localização
          em segundo plano sem que o usuário tenha iniciado uma viagem.
        </p>

        <h2>4. Mapa e dados geográficos (OpenStreetMap)</h2>
        <p>
          A tela de postos utiliza tiles (imagens de mapa) carregados do
          servidor público do OpenStreetMap (tile.openstreetmap.org) e a
          biblioteca Leaflet, carregada de unpkg.com. O carregamento desses
          recursos expõe o endereço IP do dispositivo aos respectivos
          servidores. Os dados de postos (nome, endereço, horário) são
          fornecidos pelo OpenStreetMap sob licença ODbL e podem estar
          incompletos ou desatualizados, pois são mantidos por voluntários.
        </p>

        <h2>5. Publicidade</h2>
        <p>
          O aplicativo utiliza o Google AdMob para exibir anúncios. O Google e
          seus parceiros podem tratar o identificador de publicidade do
          dispositivo e informações de interação com anúncios de acordo com as
          configurações do dispositivo, da região e das políticas do Google. O
          usuário pode limitar o uso do identificador de publicidade nas
          configurações do Android em <em>Privacidade → Anúncios</em>.
        </p>

        <h2>6. Analytics e relatórios de falha</h2>
        <p>
          O aplicativo utiliza Firebase Analytics e Firebase Crashlytics. O
          Analytics coleta dados agregados e anônimos sobre uso de
          funcionalidades e eventos configurados pelo desenvolvedor. O
          Crashlytics coleta relatórios de falha técnicos (stack traces e
          informações do dispositivo) para ajudar a identificar e corrigir
          erros. Nenhum dado pessoal identificável é vinculado a esses
          relatórios pelo desenvolvedor.
        </p>

        <h2>7. Verificação de atualização</h2>
        <p>
          Ao abrir o aplicativo, ele pode fazer uma requisição a um arquivo
          hospedado no GitHub (github.com) para verificar se há uma versão mais
          recente disponível na loja. Essa requisição expõe o endereço IP do
          dispositivo ao GitHub e não envia nenhuma informação pessoal.
        </p>

        <h2>8. Serviços de terceiros — resumo</h2>
        <ul>
          <li>Google AdMob — publicidade</li>
          <li>Firebase Analytics — uso agregado do app</li>
          <li>Firebase Crashlytics — relatórios de falha</li>
          <li>OpenStreetMap / Overpass API — dados de postos e mapa</li>
          <li>unpkg.com — biblioteca Leaflet (carregada no mapa)</li>
          <li>GitHub — verificação de atualização</li>
        </ul>
        <p>
          O tratamento realizado por esses serviços está sujeito às respectivas
          políticas de privacidade de cada fornecedor.
        </p>

        <h2>9. Segurança</h2>
        <p>
          Todas as comunicações com serviços externos utilizam HTTPS. Dados
          armazenados localmente no dispositivo são protegidos pelas medidas de
          segurança do próprio sistema operacional Android. Nenhum sistema pode
          ser considerado absolutamente seguro.
        </p>

        <h2>10. Crianças</h2>
        <p>
          O aplicativo não é direcionado especificamente a crianças menores de
          13 anos. Caso você entenda que informações foram fornecidas de maneira
          inadequada por uma criança, entre em contato para que a situação possa
          ser analisada.
        </p>

        <h2>11. Alterações</h2>
        <p>
          Esta política pode ser atualizada para refletir mudanças no
          aplicativo, nos serviços utilizados ou em requisitos legais. A data de
          atualização no topo da página será alterada quando uma nova versão for
          publicada. Recomendamos a consulta periódica desta página.
        </p>

        <h2>12. Contato</h2>
        <p>
          Dúvidas ou solicitações relacionadas à privacidade podem ser
          encaminhadas para <a href={`mailto:${DEV_EMAIL}`}>{DEV_EMAIL}</a>.
        </p>
      </article>
    </main>
  );
}
