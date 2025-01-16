export default function Home() {
  return (
    <div>
      {/* Cabeçalho */}
      <header style={styles.header}>
        <div style={styles.logo}>Teruya Consultoria</div>
        <nav style={styles.nav}>
          <a href="#quem-somos" style={styles.link}>Quem Somos</a>
          <a href="#servicos" style={styles.link}>Serviços</a>
          <a href="#clientes" style={styles.link}>Clientes</a>
          <a href="#contato" style={styles.link}>Contato</a>
        </nav>
      </header>

      {/* Seção Quem Somos */}
      <section id="quem-somos" style={styles.section}>
        <h1>Quem Somos</h1>
        <p>
          A Teruya Consultoria é especializada em soluções de Business Intelligence, ETL, Relatórios e Automação.
          Nosso objetivo é transformar dados em resultados para o seu negócio.
        </p>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" style={styles.section}>
        <h1>Nossos Serviços</h1>
        <div style={styles.services}>
          <div style={styles.serviceCard}>
            <h2>Business Intelligence (BI)</h2>
            <p>Estratégias inteligentes baseadas em dados.</p>
          </div>
          <div style={styles.serviceCard}>
            <h2>ETL</h2>
            <p>Integração de dados eficiente e segura.</p>
          </div>
          <div style={styles.serviceCard}>
            <h2>Relatórios Personalizados</h2>
            <p>Informações detalhadas e úteis.</p>
          </div>
          <div style={styles.serviceCard}>
            <h2>Automação</h2>
            <p>Otimização de processos para seu negócio.</p>
          </div>
        </div>
      </section>

      {/* Seção Clientes */}
      <section id="clientes" style={styles.section}>
        <h1>Nossos Clientes</h1>
        <p>Clientes satisfeitos são nosso maior patrimônio.</p>
        <div style={styles.clients}>
          <div style={styles.clientLogo}>
            <img src="/enzo.png" alt="Grupo Enzo" style={styles.image} />
          </div>
          <div style={styles.clientLogo}>
            <img src="/sebrae.png" alt="SEBRAE" style={styles.image} />
          </div>
          <div style={styles.clientLogo}>
            <img src="/prefeituracg.jpeg" alt="Prefeitura de CG" style={styles.image} />
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" style={styles.section}>
        <h1>Contato</h1>
        <p>Entre em contato conosco para saber mais sobre nossas soluções.</p>
        <p>WhatsApp: <a href="https://wa.me/5567999614879">+55 (67) 99961-4879</a></p>
        <p>Email: <a href="mailto:contato@teruyaconsultoria.com">contato@teruyaconsultoria.com</a></p>
      </section>

      {/* Rodapé */}
      <footer style={styles.footer}>
        <p>© 2025 Teruya Consultoria. Todos os direitos reservados.</p>
        <p>Desenvolvido por Teruya Consultoria</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003366',
    color: 'white',
    padding: '10px 20px',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  section: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  services: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  serviceCard: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  clients: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  clientLogo: {
    background: '#eaeaea',
    padding: '20px',
    borderRadius: '8px',
    width: '150px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  footer: {
    backgroundColor: '#003366',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
  },
};
