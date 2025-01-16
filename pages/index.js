export default function Home() {
  return (
    <div>
      {/* Cabeçalho */}
      <Header />

      {/* Seção Quem Somos */}
      <section id="quem-somos" style={styles.section}>
        <h1>Quem Somos</h1>
        <p>
          A Teruya Consultoria é especializada em soluções de Business Intelligence, ETL, Relatórios e Automação.
          Nosso objetivo é transformar dados em resultados para o seu negócio.
        </p>
      </section>

      {/* Seção Serviços */}
      <Services />

      {/* Seção Clientes */}
      <Clients />

      {/* Seção Contato */}
      <Contact />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

// Componente Cabeçalho
const Header = () => (
  <header style={styles.header}>
    <div style={styles.logo}>Teruya Consultoria</div>
    <nav style={styles.nav}>
      <a href="#quem-somos" style={styles.link}>Quem Somos</a>
      <a href="#servicos" style={styles.link}>Serviços</a>
      <a href="#clientes" style={styles.link}>Clientes</a>
      <a href="#contato" style={styles.link}>Contato</a>
    </nav>
  </header>
);

// Componente Seção de Serviços
const Services = () => (
  <section id="servicos" style={styles.section}>
    <h1>Nossos Serviços</h1>
    <div style={styles.services}>
      {[
        { title: 'Business Intelligence (BI)', desc: 'Estratégias inteligentes baseadas em dados.' },
        { title: 'ETL', desc: 'Integração de dados eficiente e segura.' },
        { title: 'Relatórios Personalizados', desc: 'Informações detalhadas e úteis.' },
        { title: 'Automação', desc: 'Otimização de processos para seu negócio.' },
      ].map((service, index) => (
        <div key={index} style={styles.serviceCard}>
          <h2>{service.title}</h2>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// Componente Seção de Clientes
const Clients = () => (
  <section id="clientes" style={styles.section}>
    <h1>Nossos Clientes</h1>
    <p>Clientes satisfeitos são nosso maior patrimônio.</p>
    <div style={styles.clients}>
      {[
        { src: '/enzo.png', alt: 'Grupo Enzo' },
        { src: '/sebrae.png', alt: 'SEBRAE' },
        { src: '/prefeituracg.jpeg', alt: 'Prefeitura de CG' },
      ].map((client, index) => (
        <div key={index} style={styles.clientLogo}>
          <img src={client.src} alt={client.alt} style={styles.image} />
        </div>
      ))}
    </div>
  </section>
);

// Componente Seção de Contato
const Contact = () => (
  <section id="contato" style={styles.section}>
    <h1>Contato</h1>
    <p>Entre em contato conosco para saber mais sobre nossas soluções.</p>
    <p>WhatsApp: <a href="https://wa.me/5567999614879">+55 (67) 99961-4879</a></p>
    <p>Email: <a href="mailto:contato@teruyaconsultoria.com">contato@teruyaconsultoria.com</a></p>
  </section>
);

// Componente Rodapé
const Footer = () => (
  <footer style={styles.footer}>
    <p>© 2025 Teruya Consultoria. Todos os direitos reservados.</p>
    <p>Desenvolvido por Teruya Consultoria</p>
  </footer>
);

// Estilos
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
  },
  clients: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  clientLogo: {
    background: '#eaeaea',
    borderRadius: '8px',
    width: '200px', // Largura fixa do card
    height: '150px', // Altura fixa do card
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Garante que a imagem não ultrapasse o card
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Faz a imagem preencher o card proporcionalmente
  },
  footer: {
    backgroundColor: '#003366',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
  },
};
