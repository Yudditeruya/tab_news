export default function Home() {
  return (
    <div style={styles.body}>
      {/* Cabeçalho */}
      <Header />

      {/* Seção Quem Somos */}
      <WhoWeAre />

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

// Componente Quem Somos
const WhoWeAre = () => (
  <section id="quem-somos" style={styles.section}>
    <div style={styles.whoWeAreRow}>
      {/* Card do Texto */}
      <div style={styles.textCard}>
        <h1 style={styles.title}>Quem Somos</h1>
        <p style={styles.text}>
          A Teruya Consultoria é especializada em soluções de Business Intelligence, ETL, Relatórios e Automação.
          Nosso objetivo é transformar dados em resultados para o seu negócio.
        </p>
        <p style={styles.text}>
          Com mais de 6 anos de experiência trabalhando com dados, ajudamos empresas a tomar decisões baseadas em
          informações confiáveis e visões analíticas, promovendo eficiência e resultados extraordinários.
        </p>
      </div>

      {/* Card da Foto */}
      <div style={styles.imageCard}>
        <img src="/Yuddi.jpeg" alt="Minha Foto" style={styles.profileImage} />
      </div>
    </div>
  </section>
);

// Componente Serviços
const Services = () => (
  <section id="servicos" style={styles.section}>
    <h1 style={styles.title}>Nossos Serviços</h1>
    <div style={styles.services}>
      {[
        { title: 'Business Intelligence (BI)', desc: 'Estratégias inteligentes baseadas em dados.' },
        { title: 'ETL', desc: 'Integração de dados eficiente e segura.' },
        { title: 'Relatórios Personalizados', desc: 'Informações detalhadas e úteis.' },
        { title: 'Dashboards para todas áreas', desc: 'Ferramentas: PowerBI, Qlik Sense, Pentaho Designer, Report Builder' },
        { title: 'Automação', desc: 'Otimização de processos para seu negócio.' },
      ].map((service, index) => (
        <div key={index} style={styles.serviceCard}>
          <h2 style={styles.cardTitle}>{service.title}</h2>
          <p style={styles.cardText}>{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// Componente Clientes
const Clients = () => (
  <section id="clientes" style={styles.section}>
    <h1 style={styles.title}>Nossos Clientes</h1>
    <p style={styles.text}>Clientes satisfeitos são nosso maior patrimônio.</p>
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

// Componente Contato
const Contact = () => (
  <section id="contato" style={styles.section}>
    <h1 style={styles.title}>Contato</h1>
    <p style={styles.text}>Entre em contato conosco para saber mais sobre nossas soluções.</p>
    <p style={styles.text}>
      WhatsApp: <a href="https://wa.me/5567999614879" style={styles.contactLink}>+55 (67) 99961-4879</a>
    </p>
    <p style={styles.text}>
      Email: <a href="mailto:dsa.teruya@gmail.com" style={styles.contactLink}>dsa.teruya@gmail.com</a>
    </p>
  </section>
);

// Componente Rodapé
const Footer = () => (
  <footer style={styles.footer}>
    <p style={styles.footerText}>© 2025 Teruya Consultoria. Todos os direitos reservados.</p>
    <p style={styles.footerText}>Desenvolvido por Teruya Consultoria</p>
  </footer>
);

// Estilos
const styles = {
  body: {
    backgroundColor: '#f7fbff',
    color: '#333',
    margin: 0,
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003366',
    color: 'white',
    padding: '10px 20px',
  },
  logo: {
    fontSize: '1.8em',
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
    transition: 'color 0.3s',
    fontSize: '1em',
  },
  section: {
    padding: '30px 10px',
    marginBottom: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  whoWeAreRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '20px',
  },
  textCard: {
    flex: '2',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  imageCard: {
    flex: '1',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  profileImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  title: {
    fontSize: '2em',
    marginBottom: '10px',
    textAlign: 'left',
  },
  text: {
    fontSize: '1em',
    color: '#555',
    marginBottom: '10px',
  },
  footer: {
    backgroundColor: '#003366',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
  },
  footerText: {
    margin: 0,
    fontSize: '0.9em',
  },
};
